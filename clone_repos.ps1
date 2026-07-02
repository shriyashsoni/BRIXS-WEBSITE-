$repos = @(
    "https://github.com/themesberg/flowbite.git",
    "https://github.com/framer/motion.git",
    "https://github.com/greensock/GSAP.git",
    "https://github.com/airbnb/lottie-web.git",
    "https://github.com/rive-app/rive-wasm.git",
    "https://github.com/tailwindlabs/heroicons.git",
    "https://github.com/lucide-icons/lucide.git",
    "https://github.com/tabler/tabler-icons.git"
)

$targetDir = "e:\chain\brixs chain main mwebsite\bricks website finalization\reference_repos"

if (!(Test-Path -Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir | Out-Null
}

Set-Location -Path $targetDir

foreach ($repo in $repos) {
    $repoName = ($repo -split "/")[-1] -replace "\.git",""
    if (!(Test-Path -Path $repoName)) {
        Write-Host "Cloning $repoName..."
        git clone $repo
    } else {
        Write-Host "$repoName already exists. Skipping..."
    }
}

Write-Host "Done cloning repositories!"
