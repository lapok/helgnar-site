<?php
/**
 * PHP Test File for Helgnar Site
 * Tests PHP functionality and Textolite compatibility
 */

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<!DOCTYPE html>";
echo "<html lang='en'>";
echo "<head>";
echo "<meta charset='UTF-8'>";
echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
echo "<title>PHP Test - Helgnar Site</title>";
echo "<style>";
echo "body { font-family: Arial, sans-serif; margin: 40px; background: #1a1a1a; color: #fff; }";
echo ".container { max-width: 800px; margin: 0 auto; }";
echo ".success { color: #4CAF50; }";
echo ".error { color: #f44336; }";
echo ".warning { color: #ff9800; }";
echo ".info { color: #2196F3; }";
echo "h1 { color: #ff6b35; }";
echo "h2 { color: #ff6b35; border-bottom: 2px solid #ff6b35; padding-bottom: 10px; }";
echo ".test-item { margin: 10px 0; padding: 10px; background: #2a2a2a; border-radius: 5px; }";
echo ".code { background: #333; padding: 10px; border-radius: 3px; font-family: monospace; }";
echo "</style>";
echo "</head>";
echo "<body>";

echo "<div class='container'>";
echo "<h1>🗡️ Helgnar Site - PHP Test</h1>";

// PHP Version Test
echo "<h2>📋 System Information</h2>";
echo "<div class='test-item'>";
echo "<strong>PHP Version:</strong> <span class='success'>" . phpversion() . "</span><br>";
echo "<strong>Server Software:</strong> " . ($_SERVER['SERVER_SOFTWARE'] ?? 'Unknown') . "<br>";
echo "<strong>Document Root:</strong> " . ($_SERVER['DOCUMENT_ROOT'] ?? 'Unknown') . "<br>";
echo "<strong>Current Directory:</strong> " . getcwd() . "<br>";
echo "</div>";

// PHP Extensions Test
echo "<h2>🔧 PHP Extensions</h2>";
$required_extensions = ['curl', 'json', 'mbstring', 'fileinfo'];
foreach ($required_extensions as $ext) {
    echo "<div class='test-item'>";
    if (extension_loaded($ext)) {
        echo "<span class='success'>✅ $ext</span> - Loaded";
    } else {
        echo "<span class='error'>❌ $ext</span> - Not loaded";
    }
    echo "</div>";
}

// File Permissions Test
echo "<h2>📁 File Permissions</h2>";
$test_dirs = ['textolite', 'assets', 'css', 'js'];
foreach ($test_dirs as $dir) {
    echo "<div class='test-item'>";
    if (is_dir($dir)) {
        if (is_writable($dir)) {
            echo "<span class='success'>✅ $dir</span> - Directory exists and is writable";
        } else {
            echo "<span class='warning'>⚠️ $dir</span> - Directory exists but not writable";
        }
    } else {
        echo "<span class='error'>❌ $dir</span> - Directory not found";
    }
    echo "</div>";
}

// Textolite Configuration Test
echo "<h2>📝 Textolite Configuration</h2>";
$textolite_config = 'textolite/conf.ini';
if (file_exists($textolite_config)) {
    echo "<div class='test-item'>";
    echo "<span class='success'>✅ Configuration file found</span><br>";
    
    $config = parse_ini_file($textolite_config);
    if ($config) {
        echo "<strong>Login:</strong> " . ($config['login'] ?? 'Not set') . "<br>";
        echo "<strong>Password:</strong> " . (isset($config['password']) ? 'Set' : 'Not set') . "<br>";
        echo "<strong>Theme:</strong> " . ($config['theme'] ?? 'default') . "<br>";
        echo "<strong>Language:</strong> " . ($config['lang'] ?? 'en') . "<br>";
    } else {
        echo "<span class='error'>❌ Failed to parse configuration</span>";
    }
    echo "</div>";
} else {
    echo "<div class='test-item'>";
    echo "<span class='error'>❌ Configuration file not found</span>";
    echo "</div>";
}

// Textolite Files Test
echo "<h2>📄 Textolite Files</h2>";
$textolite_files = [
    'textolite/textolite.php',
    'textolite/textolite.js',
    'textolite/textolite.css',
    'textolite/lang.ini'
];

foreach ($textolite_files as $file) {
    echo "<div class='test-item'>";
    if (file_exists($file)) {
        $size = filesize($file);
        echo "<span class='success'>✅ $file</span> - " . number_format($size) . " bytes";
    } else {
        echo "<span class='error'>❌ $file</span> - Not found";
    }
    echo "</div>";
}

// PHP Settings Test
echo "<h2>⚙️ PHP Settings</h2>";
$settings = [
    'upload_max_filesize' => ini_get('upload_max_filesize'),
    'post_max_size' => ini_get('post_max_size'),
    'max_execution_time' => ini_get('max_execution_time'),
    'memory_limit' => ini_get('memory_limit'),
    'file_uploads' => ini_get('file_uploads') ? 'Enabled' : 'Disabled'
];

foreach ($settings as $setting => $value) {
    echo "<div class='test-item'>";
    echo "<strong>$setting:</strong> $value";
    echo "</div>";
}

// Test File Operations
echo "<h2>🧪 File Operations Test</h2>";
$test_file = 'test-write.txt';
$test_content = 'Test content for Helgnar Site - ' . date('Y-m-d H:i:s');

if (file_put_contents($test_file, $test_content)) {
    echo "<div class='test-item'>";
    echo "<span class='success'>✅ File write test passed</span><br>";
    
    if (file_get_contents($test_file) === $test_content) {
        echo "<span class='success'>✅ File read test passed</span><br>";
    } else {
        echo "<span class='error'>❌ File read test failed</span><br>";
    }
    
    if (unlink($test_file)) {
        echo "<span class='success'>✅ File delete test passed</span>";
    } else {
        echo "<span class='error'>❌ File delete test failed</span>";
    }
    echo "</div>";
} else {
    echo "<div class='test-item'>";
    echo "<span class='error'>❌ File write test failed</span>";
    echo "</div>";
}

// Links
echo "<h2>🔗 Quick Links</h2>";
echo "<div class='test-item'>";
echo "<a href='index.html' style='color: #ff6b35; text-decoration: none;'>🏠 Main Site</a> | ";
echo "<a href='textolite/' style='color: #ff6b35; text-decoration: none;'>📝 Textolite Editor</a> | ";
echo "<a href='test-php.php' style='color: #ff6b35; text-decoration: none;'>🔄 Refresh Test</a>";
echo "</div>";

echo "<h2>📊 Test Summary</h2>";
echo "<div class='test-item'>";
echo "<strong>Test completed at:</strong> " . date('Y-m-d H:i:s') . "<br>";
echo "<strong>PHP Version:</strong> " . phpversion() . "<br>";
echo "<strong>Server:</strong> " . ($_SERVER['SERVER_SOFTWARE'] ?? 'Unknown') . "<br>";
echo "</div>";

echo "</div>";
echo "</body>";
echo "</html>";
?>
