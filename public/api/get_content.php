<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$db_file = '../data/leads.db';
if (!file_exists('../data')) {
    mkdir('../data', 0755, true);
    // Protect data folder from web access
    file_put_contents('../data/.htaccess', "Deny from all");
}

try {
    $db = new PDO("sqlite:$db_file");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Get Settings

    // Get Settings
    $settingsStmt = $db->query("SELECT * FROM settings");
    $settings = [];
    while ($row = $settingsStmt->fetch(PDO::FETCH_ASSOC)) {
        $settings[$row['key']] = $row['value'];
    }

    // Get Services
    $servicesStmt = $db->query("SELECT * FROM services ORDER BY sort_order ASC");
    $services = $servicesStmt->fetchAll(PDO::FETCH_ASSOC);

    // Get Portfolio
    $portfolioStmt = $db->query("SELECT * FROM portfolio");
    $portfolio = $portfolioStmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "status" => "success",
        "data" => [
            "settings" => $settings,
            "services" => $services,
            "portfolio" => $portfolio
        ]
    ]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
