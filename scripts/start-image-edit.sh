#!/bin/bash
set -e

# Navigate to the image editing directory
cd "$(dirname "$0")/../Qwen-Image-Edit-next-scene"

echo "🚀 Starting Qwen Image Edit Service..."

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating Python virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔌 Activating virtual environment..."
source venv/bin/activate

# Install/upgrade dependencies
echo "📚 Installing dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

# Use EBURON_API_KEY as primary, fall back to HF_TOKEN
if [ -n "$EBURON_API_KEY" ]; then
    export HF_TOKEN="$EBURON_API_KEY"
    echo "✓ Using EBURON_API_KEY for authentication"
elif [ -n "$HF_TOKEN" ]; then
    echo "✓ Using HF_TOKEN for authentication"
else
    echo "⚠️  Warning: Neither EBURON_API_KEY nor HF_TOKEN is set."
    echo "   The image editing service may not work without authentication."
    echo "   Set it with: export EBURON_API_KEY='your-key-here'"
    echo "   Or for backward compatibility: export HF_TOKEN='your-token-here'"
fi

# Start the Gradio app
echo "✨ Starting Gradio app on port 7860..."
python app.py
