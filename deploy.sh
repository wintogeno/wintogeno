#!/bin/bash

# Muhammad Muneeb Portfolio - Deploy to Vercel
# This script helps you deploy your portfolio to Vercel

set -e

echo "🚀 Muhammad Muneeb Portfolio - Vercel Deployment"
echo "=================================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo "✅ npm $(npm -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

echo ""
echo "✅ Build successful!"
echo ""
echo "Deployment options:"
echo "1. Using Vercel CLI (recommended):"
echo "   npm install -g vercel"
echo "   vercel --prod"
echo ""
echo "2. Using Git integration:"
echo "   git push origin main"
echo "   Then link your repo at https://vercel.com/new"
echo ""
echo "3. Test locally first:"
echo "   npm run dev"
echo "   Open http://localhost:3000"
echo ""
