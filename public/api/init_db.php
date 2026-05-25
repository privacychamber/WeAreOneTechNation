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

    // Seed Initial Data (only if empty or needs update)
    $stmt = $db->prepare("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)");
    $stmt->execute(['contact_email', 'privacy.chamber@gmail.com']);
    $stmt->execute(['contact_whatsapp', '+91-9418100803']);
    $stmt->execute(['hero_title', "We Build Digital Systems That Think, Learn, and Convert."]);
    $stmt->execute(['hero_subtitle', "From AI-powered automation to high-performance web ecosystems. We design, build, and scale your digital future."]);

    $serviceCheck = $db->query("SELECT COUNT(*) FROM services")->fetchColumn();
    if ($serviceCheck != 4) {
        $db->exec("DELETE FROM services");
        $stmt = $db->prepare("INSERT INTO services (title, description, icon) VALUES (?, ?, ?)");
        $stmt->execute(['AI-Powered Systems', 'Intelligent automation and LLMs', 'cpu']);
        $stmt->execute(['High-Converting Websites', 'Speed-optimized, SEO-first', 'globe']);
        $stmt->execute(['Scalable Architectures', 'Robust backends handling millions of requests', 'database']);
        $stmt->execute(['Digital Security', 'Enterprise-grade protection', 'shield']);
    }

    echo json_encode(["status" => "success", "message" => "Database initialized with dynamic content support."]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
