import React, { useState } from 'react';
import { Calendar, ChevronRight, Search, LayoutDashboard, Settings, LogOut, Loader2 } from 'lucide-react';

interface Lead {
  id: number;
  name: string;
  email: string;
  project_type: string;
  budget: string;
  message: string;
  status: string;
  created_at: string;
}

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'leads' | 'content'>('leads');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'WAOTN_ADMIN_2024') {
      setIsLoggedIn(true);
      fetchLeads();
      fetchContent();
    } else {
      alert('Invalid Password');
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/get_leads.php', {
        headers: { 'Authorization': 'WAOTN_ADMIN_2024' }
      });
      const result = await response.json();
      if (result.status === 'success') setLeads(result.data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/get_content.php');
      const result = await response.json();
      if (result.status === 'success') setContent(result.data);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  const updateSetting = async (key: string, value: string) => {
    try {
      await fetch('/api/update_content.php', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'WAOTN_ADMIN_2024'
        },
        body: JSON.stringify({ type: 'setting', action: 'update', key, value })
      });
      fetchContent();
    } catch (error) {
      console.error('Error updating setting:', error);
    }
  };

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-dark p-6">
        <div className="w-full max-w-md glass p-10 rounded-[2.5rem] border-white/10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-sora mb-2">Superadmin</h1>
            <p className="text-slate-400">Restricted Access</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors text-white"
                placeholder="Enter password..."
              />
            </div>
            <button type="submit" className="btn-primary w-full py-4 text-lg">Login to Dashboard</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-dark text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6 flex flex-col gap-8 hidden lg:flex">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-primary rounded-lg"></div>
          <span className="font-bold font-sora tracking-tight">WAOTN ADMIN</span>
        </div>
        
        <nav className="flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('leads')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'leads' ? 'bg-primary/10 text-primary' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">Leads Dashboard</span>
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'content' ? 'bg-primary/10 text-primary' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <Settings size={20} />
            <span className="font-medium">Content Manager</span>
          </button>
        </nav>

        <button 
          onClick={() => setIsLoggedIn(false)}
          className="mt-auto flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 lg:p-12 overflow-auto pt-24 lg:pt-12">
        {activeTab === 'leads' ? (
          <>
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h1 className="text-4xl font-bold font-sora mb-2">Lead Stream</h1>
                <p className="text-slate-400">Manage your incoming business opportunities.</p>
              </div>
              
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/5 border border-white/10 pl-12 pr-6 py-3 rounded-2xl outline-none focus:border-primary transition-all w-full md:w-80"
                />
              </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass p-6 rounded-3xl border-white/5">
                <p className="text-slate-400 text-sm font-medium mb-1">Total Leads</p>
                <h3 className="text-3xl font-bold font-sora">{leads.length}</h3>
              </div>
              <div className="glass p-6 rounded-3xl border-white/5">
                <p className="text-slate-400 text-sm font-medium mb-1">New Today</p>
                <h3 className="text-3xl font-bold font-sora">
                  {leads.filter(l => new Date(l.created_at).toDateString() === new Date().toDateString()).length}
                </h3>
              </div>
              <div className="glass p-6 rounded-3xl border-white/5">
                <p className="text-slate-400 text-sm font-medium mb-1">Avg. Budget</p>
                <h3 className="text-3xl font-bold font-sora">$10k+</h3>
              </div>
            </div>

            {/* Leads Table */}
            <div className="glass rounded-[2rem] border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/10 bg-white/5">
                <h3 className="text-xl font-bold">Recent Leads</h3>
              </div>
              
              <div className="overflow-x-auto">
                {loading ? (
                  <div className="p-20 flex flex-col items-center justify-center gap-4">
                    <Loader2 className="animate-spin text-primary" size={40} />
                    <p className="text-slate-400">Fetching latest data...</p>
                  </div>
                ) : (
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-slate-500 text-sm font-bold uppercase tracking-widest border-b border-white/10">
                        <th className="px-6 py-4">Client</th>
                        <th className="px-6 py-4">Project</th>
                        <th className="px-6 py-4">Budget</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="px-6 py-6">
                            <div className="font-bold text-white mb-1">{lead.name}</div>
                            <div className="text-slate-400 text-sm">{lead.email}</div>
                          </td>
                          <td className="px-6 py-6">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-tighter">
                              {lead.project_type}
                            </span>
                          </td>
                          <td className="px-6 py-6 text-slate-300 font-medium">{lead.budget}</td>
                          <td className="px-6 py-6 text-slate-400 text-sm">
                            {new Date(lead.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-6 text-right">
                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white">
                              <ChevronRight size={20} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-4xl">
            <header className="mb-12">
              <h1 className="text-4xl font-bold font-sora mb-2">Content Manager</h1>
              <p className="text-slate-400">Update your website content in real-time.</p>
            </header>

            <div className="space-y-8">
              {/* Brand Settings */}
              <div className="glass p-8 rounded-[2rem] border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Settings className="text-primary" size={20} /> Brand Configuration
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Contact Email</label>
                    <input 
                      type="text" 
                      defaultValue={content?.settings?.contact_email}
                      onBlur={(e) => updateSetting('contact_email', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 px-6 py-3 rounded-xl outline-none focus:border-primary transition-colors text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">WhatsApp Number</label>
                    <input 
                      type="text" 
                      defaultValue={content?.settings?.contact_whatsapp}
                      onBlur={(e) => updateSetting('contact_whatsapp', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 px-6 py-3 rounded-xl outline-none focus:border-primary transition-colors text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Hero Section */}
              <div className="glass p-8 rounded-[2rem] border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="text-primary" size={20} /> Hero Section
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Hero Title (HTML supported)</label>
                    <input 
                      type="text" 
                      defaultValue={content?.settings?.hero_title}
                      onBlur={(e) => updateSetting('hero_title', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 px-6 py-3 rounded-xl outline-none focus:border-primary transition-colors text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Hero Subtitle</label>
                    <textarea 
                      rows={3}
                      defaultValue={content?.settings?.hero_subtitle}
                      onBlur={(e) => updateSetting('hero_subtitle', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 px-6 py-3 rounded-xl outline-none focus:border-primary transition-colors text-white resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Services List (Preview) */}
              <div className="glass p-8 rounded-[2rem] border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <LayoutDashboard className="text-primary" size={20} /> Services Overview
                </h3>
                <div className="space-y-4">
                  {content?.services?.map((service: any) => (
                    <div key={service.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary uppercase font-bold text-xs">
                          {service.icon.substring(0, 2)}
                        </div>
                        <div>
                          <p className="font-bold">{service.title}</p>
                          <p className="text-xs text-slate-400">{service.description.substring(0, 50)}...</p>
                        </div>
                      </div>
                      <ChevronRight className="text-slate-600" size={20} />
                    </div>
                  ))}
                  <p className="text-center text-sm text-slate-500 mt-4 italic">Service detailed editor coming in next update.</p>
                </div>
              </div>
            </div>
          </div>
        ) }
      </main>
    </div>
  );
};

export default Admin;
