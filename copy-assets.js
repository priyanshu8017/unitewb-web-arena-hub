
const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
if (!fs.existsSync(path.resolve(__dirname, 'public'))) {
  fs.mkdirSync(path.resolve(__dirname, 'public'));
}

// Copy logo.png to public directory if it exists in the root
if (fs.existsSync(path.resolve(__dirname, 'logo.png'))) {
  fs.copyFileSync(
    path.resolve(__dirname, 'logo.png'),
    path.resolve(__dirname, 'public', 'logo.png')
  );
  console.log('Copied logo.png to public directory');
}

// Copy numbered images if they exist
for (let i = 1; i <= 5; i++) {
  const filename = `${i}.png`;
  if (fs.existsSync(path.resolve(__dirname, filename))) {
    fs.copyFileSync(
      path.resolve(__dirname, filename),
      path.resolve(__dirname, 'public', filename)
    );
    console.log(`Copied ${filename} to public directory`);
  }
}
