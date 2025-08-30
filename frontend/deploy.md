# 🚀 Vercel Deployment Guide

## Prerequisites
- GitHub/GitLab account
- Vercel account (free at vercel.com)

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub/GitLab**
   ```bash
   git remote add origin https://github.com/yourusername/farmrent.git
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Automatic Deployment (Recommended)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in** with your GitHub/GitLab account
3. **Click "New Project"**
4. **Import your repository**
5. **Configure project settings:**
   - Framework Preset: `Vite`
   - Root Directory: `frontend` (if your repo has both frontend/backend)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. **Click "Deploy"**

### Option B: Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd frontend
   vercel --prod
   ```

## Step 3: Configure Environment Variables (if needed)

In your Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add any required variables:
   ```
   VITE_API_URL=https://your-api.com
   VITE_APP_NAME=FarmRent
   ```

## Step 4: Custom Domain (Optional)

1. **In Vercel dashboard:**
   - Go to "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Configuration:**
   - Add CNAME record pointing to your Vercel URL
   - Wait for DNS propagation (up to 48 hours)

## Step 5: Verify Deployment

1. **Check your live URL**
2. **Test all features:**
   - Navigation between pages
   - Equipment filtering
   - Shopping cart
   - Responsive design
   - Dark mode toggle

## Troubleshooting

### Build Errors
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation passes locally

### Routing Issues
- Ensure `vercel.json` is in the root directory
- Check that React Router is configured correctly

### Performance Issues
- Check bundle size in Vercel analytics
- Optimize images and assets
- Review code splitting configuration

## Post-Deployment

### Monitoring
- Set up Vercel Analytics
- Monitor performance metrics
- Check error logs

### Updates
- Push changes to your repository
- Vercel will automatically redeploy
- Preview deployments for testing

### Backup
- Keep local development environment
- Regular backups of your code
- Document any custom configurations

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions
