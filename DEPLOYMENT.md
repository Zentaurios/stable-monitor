# 🚀 QUICK DEPLOYMENT GUIDE
## Treasury Digital Asset Compliance Monitor

### Deploy to Vercel in 5 Minutes

#### Option 1: Automatic Deployment (Recommended)

1. **Open Terminal** in the project directory:
   ```bash
   cd /Users/Ryan/builds/stable-monitor
   ```

2. **Make deployment script executable**:
   ```bash
   chmod +x deploy.sh
   ```

3. **Run deployment script**:
   ```bash
   ./deploy.sh
   ```

4. **Follow Vercel prompts**:
   - Login to Vercel account (or create one)
   - Confirm project settings
   - Deploy!

#### Option 2: Manual Vercel CLI

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy project**:
   ```bash
   vercel --prod
   ```

#### Option 3: GitHub + Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Treasury GENIUS Act Demo - Digital Asset Compliance Monitor"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" 
   - Import from GitHub
   - Deploy automatically

#### Option 4: Drag & Drop (Quickest)

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Zip the project**:
   ```bash
   zip -r treasury-demo.zip . -x node_modules/\* .git/\*
   ```

3. **Upload to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Drag and drop the zip file
   - Deploy instantly

---

### ⚡ FASTEST PATH (2 minutes):

```bash
cd /Users/Ryan/builds/stable-monitor
npm install -g vercel
vercel --prod
```

Follow the prompts, and you'll have a live URL in under 2 minutes!

---

### 🎯 Post-Deployment Checklist

✅ **Test all pages**:
- `/dashboard` - Main monitoring interface
- `/network` - Interactive network graph  
- `/risk` - AI/ML risk assessment
- `/compliance` - Alerts and reporting
- `/identity` - KYC and verification

✅ **Verify features**:
- Real-time transaction updates
- Interactive network visualization
- Risk scoring charts
- Compliance alerts
- Mock data loading

✅ **Share with Treasury**:
- Copy the Vercel deployment URL
- Add to Treasury GENIUS Act submission
- Include in portfolio documentation

---

### 🏛️ Treasury Demo Ready!

This deployment showcases:
- **Innovative compliance technologies**
- **Real-time risk assessment**
- **Privacy-preserving verification** 
- **Automated regulatory reporting**
- **Advanced network analysis**

Perfect for Treasury officials evaluating digital asset compliance solutions under the GENIUS Act.
