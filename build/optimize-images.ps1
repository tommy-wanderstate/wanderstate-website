# WANDER STATE - Image Optimization Script
# Requires: Node.js with sharp package
# Run: npm install sharp glob --save-dev (first time only)
# Then: node build/optimize-images.js

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "WANDER STATE - Image Optimization" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
$nodeVersion = node --version 2>$null
if (-not $nodeVersion) {
    Write-Host "ERROR: Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green

# Check if package.json exists, if not create it
$packageJsonPath = Join-Path $PSScriptRoot "..\package.json"
if (-not (Test-Path $packageJsonPath)) {
    Write-Host "Creating package.json..." -ForegroundColor Yellow
    $packageJson = @{
        name = "wanderstate-marketing"
        version = "1.0.0"
        description = "Wander State Marketing Website"
        scripts = @{
            "optimize-images" = "node build/optimize-images.js"
            "build" = "node build/optimize-images.js"
        }
        devDependencies = @{}
    } | ConvertTo-Json -Depth 3
    Set-Content -Path $packageJsonPath -Value $packageJson
}

# Install dependencies if needed
$nodeModulesPath = Join-Path $PSScriptRoot "..\node_modules"
if (-not (Test-Path $nodeModulesPath)) {
    Write-Host "Installing dependencies (sharp, glob)..." -ForegroundColor Yellow
    Push-Location (Join-Path $PSScriptRoot "..")
    npm install sharp glob --save-dev
    Pop-Location
}

# Run the optimization script
Write-Host "Running image optimization..." -ForegroundColor Yellow
Push-Location (Join-Path $PSScriptRoot "..")
node build/optimize-images.js
Pop-Location

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Optimization complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
