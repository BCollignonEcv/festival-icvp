<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the form data
    $data = json_decode(file_get_contents('php://input'), true);

    $firstname = $data["firstname"];
    $lastname = $data["lastname"];
    $email = $data["email"];
    $phone = $data["phone"];
    $message = $data["message"];

    // Set the recipient email address
    $to = "lbeaulieu@pariskitechallenge.com"; // Replace with the recipient's email address

    // Set the subject of the email
    // $subject = "Contact";
    $subject = "Contact - $firstname $lastname";

    // Compose the email message
    $messageBody = "Name: $firstname $lastname\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Phone: $phone\n\n";
    $messageBody .= "Message:\n$message";

    // Additional headers
    $headers = "From: contact@pariskitechallenge.com\r\n";
    $headers .= "Reply-To: noreply@pariskitechallenge.com\r\n";

    // Send the email
    $success = mail($to, $subject, $messageBody, $headers);

    if ($success) {
        // Email sent successfully
        echo json_encode(["status" => "OK", "message" => "Email envoyé"]);
    } else {
        // Email sending failed
        http_response_code(500); // Internal Server Error
        echo json_encode(["status" => "ERROR","message" => "Oups, une erreur est survenue"]);
    }
} else {
    // Not a POST request
    http_response_code(400); // Bad Request
    echo json_encode(["status" => "ERROR", "message" => "Invalid request"]);
}
