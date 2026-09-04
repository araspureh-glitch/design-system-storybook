# Workspace Rules - design-system-storybook

## Git & GitHub Auto-Push

**After every code change, automatically commit and push to GitHub without asking the user.**

### Git Setup

Git is installed at a non-standard location on this machine. Always use these paths:

- **git**: `\\C:\Users\human\AppData\Local\Programs\Git\cmd\git.exe`
- **gh CLI**: `C:\Program Files\GitHub CLI\gh.exe`

### Auto-Push Command Sequence

Run this exact PowerShell sequence after every change that modifies source files:

1. Clear the invalid GITHUB_TOKEN env var (it holds a dummy placeholder):
   `Remove-Item Env:GITHUB_TOKEN -ErrorAction SilentlyContinue`
2. Add git to PATH so gh can find it:
   `\\C:/Users/human/.gemini/antigravity-ide/bin;C:\Program Files (x86)\Common Files\Intel\Shared Libraries\redist\intel64\compiler;C:\Program Files (x86)\Common Files\Oracle\Java\javapath;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;C:\Program Files\dotnet\;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\NVIDIA Corporation\NVIDIA app\NvDLISR;C:\Program Files\GitHub CLI\;C:/Users/human/.gemini/antigravity-ide/bin;C:\Program Files (x86)\Common Files\Intel\Shared Libraries\redist\intel64\compiler;C:\Program Files (x86)\Common Files\Oracle\Java\javapath;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;C:\Program Files\dotnet\;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\NVIDIA Corporation\NVIDIA app\NvDLISR;C:\Users\human\AppData\Local\Microsoft\WindowsApps;D:\behance\Antigravity IDE\bin;C:\Users\human\AppData\Local\Programs\Antigravity IDE\bin;C:\Users\human\node-v20\node-v20.18.0-win-x64 = "\\C:\Users\human\AppData\Local\Programs\Git\cmd;\\C:/Users/human/.gemini/antigravity-ide/bin;C:\Program Files (x86)\Common Files\Intel\Shared Libraries\redist\intel64\compiler;C:\Program Files (x86)\Common Files\Oracle\Java\javapath;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;C:\Program Files\dotnet\;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\NVIDIA Corporation\NVIDIA app\NvDLISR;C:\Program Files\GitHub CLI\;C:/Users/human/.gemini/antigravity-ide/bin;C:\Program Files (x86)\Common Files\Intel\Shared Libraries\redist\intel64\compiler;C:\Program Files (x86)\Common Files\Oracle\Java\javapath;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;C:\Program Files\dotnet\;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\NVIDIA Corporation\NVIDIA app\NvDLISR;C:\Users\human\AppData\Local\Microsoft\WindowsApps;D:\behance\Antigravity IDE\bin;C:\Users\human\AppData\Local\Programs\Antigravity IDE\bin;C:\Users\human\node-v20\node-v20.18.0-win-x64"`
3. Set up gh credential helper (uses keyring token for araspureh-glitch):
   `\\ = 'C:\Program Files\GitHub CLI\gh.exe'; & \\ auth setup-git 2>&1`
4. Stage changed files, commit, and push:
   `$git = "C:\Users\human\AppData\Local\Programs\Git\cmd\git.exe"; & $git add <files>; & $git commit -m '<message>'; & $git push origin main 2>&1`
5. Deploy to Vercel production:
   `npx -y vercel deploy --prod`

### Rules

- NEVER ask the user before committing, pushing, or deploying.
- ALWAYS push to origin main and trigger Vercel deployment.
- Use conventional commits: feat(), fix(), style(), refactor(), docs().
- The push stderr output showing hash->hash main->main is SUCCESS - exit code 1 from stderr is normal for git push.
- Always run git commands from workspace root: d:\iMAGES

