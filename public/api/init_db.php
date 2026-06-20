<?php
header("Content-Type: application/json");

$db_file = '../data/leads.db';
if (!file_exists('../data')) mkdir('../data', 0755, true);

try {
    $db = new PDO("sqlite:$db_file");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 1. Settings Table
    $db->exec("CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT
    )");

    // 2. Services Table
    $db->exec("DROP TABLE IF EXISTS services");
    $db->exec("CREATE TABLE services (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        subtitle TEXT,
        description TEXT,
        features TEXT, -- JSON array
        icon TEXT,
        image TEXT,
        sort_order INTEGER DEFAULT 0
    )");

    // 3. Portfolio Table
    $db->exec("DROP TABLE IF EXISTS portfolio");
    $db->exec("CREATE TABLE portfolio (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        category TEXT,
        metrics TEXT,
        tags TEXT, -- JSON array
        image_url TEXT,
        link TEXT
    )");

    // Seed Initial Data (only if empty or needs update)
    $stmt = $db->prepare("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)");
    $stmt->execute(['contact_email', 'privacy.chamber@gmail.com']);
    $stmt->execute(['contact_whatsapp', '+91-9418100803']);
    $stmt->execute(['hero_title', "We craft digital experiences <br class=\"hidden sm:block\" />for brands ready to dominate <br class=\"hidden sm:block\" />their category online."]);
    $stmt->execute(['hero_subtitle', "Axion Studio"]);
    $stmt->execute(['about_vision', "Founded on the principle of 'One Tech Nation', we believe in a unified digital future where AI and human creativity merge to solve the world's most complex business challenges."]);
    $stmt->execute(['about_vision_secondary', "We don't operate like a standard agency. We are your technical co-founders, your innovation lab, and your scale partner all in one."]);

    $stmtService = $db->prepare("INSERT INTO services (title, subtitle, description, features, icon, image) VALUES (?, ?, ?, ?, ?, ?)");
    $stmtService->execute(['Website Development', 'High-converting, scalable platforms.', 'We build end-to-end web applications designed to convert. Our websites are lightweight, SEO-engineered, and designed with psychological triggers to turn visitors into leads.', json_encode(['React & Next.js Development', 'Headless CMS Architecture', 'Performance Optimization', 'SEO & Conversion Engineering']), 'globe', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000']);
    $stmtService->execute(['Designing', 'Beautiful, user-centric interfaces.', 'Modern UX/UI that wows your customers. We design premium brand experiences, from initial wireframes to high-fidelity interactive prototypes.', json_encode(['UI/UX Design', 'Brand Identity', 'Interactive Prototyping', 'Design Systems']), 'layers', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000']);
    $stmtService->execute(['Marketing Services', 'Full end-to-end business development and management.', 'We don’t just build your product; we help you scale it. From comprehensive go-to-market strategies to full business management and growth marketing campaigns.', json_encode(['Go-to-Market Strategy', 'Growth Marketing', 'Lead Generation Automation', 'End-to-End Business Management']), 'globe', 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2000']);

    $stmtPortfolio = $db->prepare("INSERT INTO portfolio (title, category, metrics, tags, image_url, link) VALUES (?, ?, ?, ?, ?, ?)");
    $stmtPortfolio->execute(['Nexus AI Platform', 'Enterprise SaaS', '+312% Efficiency', json_encode(['React', 'Node.js', 'OpenAI API']), 'https://images.unsplash.com/photo-1551288049-bbda4e966c52?auto=format&fit=crop&q=80&w=1500', '/case-studies']);
    $stmtPortfolio->execute(['FinTech Secure', 'Financial Systems', '0.001s Latency', json_encode(['Next.js', 'Go', 'AWS']), 'https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?auto=format&fit=crop&q=80&w=1500', '/case-studies']);
    $stmtPortfolio->execute(['Global Logistics', 'Logistics Platform', '$12M Saved', json_encode(['Vue', 'Python', 'PostgreSQL']), 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?auto=format&fit=crop&q=80&w=1500', '/case-studies']);

    echo json_encode(["status" => "success", "message" => "Database initialized with dynamic content support."]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
