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
    $db->exec("CREATE TABLE IF NOT EXISTS services (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        icon TEXT,
        sort_order INTEGER DEFAULT 0
    )");

    // 3. Portfolio Table
    $db->exec("CREATE TABLE IF NOT EXISTS portfolio (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        category TEXT,
        image_url TEXT,
        link TEXT
    )");

    // Seed Initial Data (only if empty)
    $check = $db->query("SELECT COUNT(*) FROM settings")->fetchColumn();
    if ($check == 0) {
        $stmt = $db->prepare("INSERT INTO settings (key, value) VALUES (?, ?)");
        $stmt->execute(['contact_email', 'privacy.chamber@gmail.com']);
        $stmt->execute(['contact_whatsapp', '+91-9418100803']);
        $stmt->execute(['hero_title', "We Design, Build & Scale <span class='text-primary'>Premium</span> Digital Systems."]);
        $stmt->execute(['hero_subtitle', "A specialized technology partner for global enterprises and ambitious startups looking to dominate their industry through AI and scalable architecture."]);
    }

    $serviceCheck = $db->query("SELECT COUNT(*) FROM services")->fetchColumn();
    if ($serviceCheck == 0) {
        $stmt = $db->prepare("INSERT INTO services (title, description, icon) VALUES (?, ?, ?)");
        $stmt->execute(['AI Integration', 'Advanced AI agents and automation systems that handle complex business logic and customer interactions.', 'cpu']);
        $stmt->execute(['Custom Ecosystems', 'Scalable, multi-platform digital architectures designed for massive scale and reliability.', 'layers']);
        $stmt->execute(['SaaS Development', 'High-performance Software-as-a-Service platforms built with the latest cloud-native technologies.', 'rocket']);
    }

    echo json_encode(["status" => "success", "message" => "Database initialized with dynamic content support."]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
