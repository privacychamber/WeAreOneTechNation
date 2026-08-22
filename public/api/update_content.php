<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

$db_file = '../data/leads.db';
$ADMIN_TOKEN = "WAOTN_ADMIN_2024";

if ($_SERVER['HTTP_AUTHORIZATION'] !== $ADMIN_TOKEN) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Unauthorized"]);
    exit;
}

try {
    $db = new PDO("sqlite:$db_file");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode(file_get_contents('php://input'), true);
    $type = $data['type']; // 'setting', 'service', or 'portfolio'
    $action = $data['action']; // 'update', 'add', or 'delete'

    if ($type === 'setting') {
        $stmt = $db->prepare("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)");
        $stmt->execute([$data['key'], $data['value']]);
    } 
    else if ($type === 'service') {
        if ($action === 'update') {
            $stmt = $db->prepare("UPDATE services SET title = ?, description = ?, icon = ? WHERE id = ?");
            $stmt->execute([$data['title'], $data['description'], $data['icon'], $data['id']]);
        } else if ($action === 'add') {
            $stmt = $db->prepare("INSERT INTO services (title, description, icon) VALUES (?, ?, ?)");
            $stmt->execute([$data['title'], $data['description'], $data['icon']]);
        } else if ($action === 'delete') {
            $stmt = $db->prepare("DELETE FROM services WHERE id = ?");
            $stmt->execute([$data['id']]);
        }
    }

    echo json_encode(["status" => "success", "message" => "Content updated successfully"]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
