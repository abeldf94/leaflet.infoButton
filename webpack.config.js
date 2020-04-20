const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/leaflet-infoButton.js',
    output: {
        filename: 'leaflet-infoButton.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        "leaflet": "L"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
        ]
    }
};