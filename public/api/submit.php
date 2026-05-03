<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Database configuration
$db_file = '../data/leads.db';

// Ensure data directory exists
if (!file_exists('../data')) {
    mkdir('../data', 0755, true);
}

try {
    $db = new PDO("sqlite:$db_file");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create table if it doesn't exist
    $db->exec("CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        project_type TEXT,
        budget TEXT,
        message TEXT,
        status TEXT DEFAULT 'New',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);

        if ($data) {
            $stmt = $db->prepare("INSERT INTO leads (name, email, project_type, budget, message) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([
                $data['name'],
                $data['email'],
                $data['projectType'],
                $data['budget'],
                $data['message']
            ]);

            echo json_encode(["status" => "success", "message" => "Lead saved successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid data"]);
        }
    }
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
