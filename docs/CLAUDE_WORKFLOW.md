# Working with Claude on Wander State

> **Purpose:** Step-by-step guide for working with Claude Code on the Wander State website and creative content.
>
> **Last Updated:** February 6, 2026

---

## Starting a Work Session

### Step 1: Open PowerShell and navigate to your project
```powershell
cd C:\Users\tommy\dev\wanderstate_marketing
```

### Step 2: Start Claude
```powershell
claude
```

### Step 3: Tell Claude which branch you want to work on

**For redesign work (private, not live):**
> "I want to work on the redesign branch"

**For live site fixes (public):**
> "I want to work on the main branch"

Claude will switch you to the correct branch and confirm.

---

## While Working

### Making changes
> "Update the hero section on the homepage"
> "Change the font color to teal"
> "Add a new FAQ about shipping"
> "Write copy for the mushroom partners section"

### Previewing locally
> "Start the local server so I can preview"

Then open `http://localhost:8000/` in your browser.

### Checking brand guidelines
> "What are our brand colors?"
> "What tone should I use for this copy?"
> "Show me our mushroom partner story"

---

## Saving Your Work

### When you're done for the day
> "Save my changes" or "Commit my work"

Claude will stage, commit, and push to the correct branch.

### If you want to be specific
> "Commit my changes to the redesign branch with message: updated hero section"

---

## Going Live (When Redesign is Ready)

> "I'm ready to make the redesign live" or "Merge redesign into main"

Claude will walk you through the merge process.

---

## Quick Reference

| What you want | What to tell Claude |
|---------------|---------------------|
| Start working on redesign | "Switch to redesign branch" |
| Start working on live site | "Switch to main branch" |
| Check which branch I'm on | "What branch am I on?" |
| Preview locally | "Start local server" |
| Save my work | "Commit my changes" |
| Push to GitHub | "Push my changes" |
| See what's changed | "Show me what I've changed" |
| Go live with redesign | "Merge redesign into main" |

---

## Branch Overview

| Branch | Purpose | Deployed? |
|--------|---------|-----------|
| **main** | Live public site | Yes (GitHub Pages) |
| **redesign-2025** | Work-in-progress redesign | No |

---

## Key Project Locations

### Local Files
- **Project:** `C:\Users\tommy\dev\wanderstate_marketing`
- **Brand assets (synced):** `C:\Users\tommy\Wander State\All Company - Documents\Brand & Marketing`

### GitHub
- **Your repo:** https://github.com/tommy-wanderstate/wanderstate-website
- **Live site:** https://tommy-wanderstate.github.io/wanderstate-website/
- **Custom domain:** www.drinkwanderstate.com (when DNS is updated)

---

## Reference Documents

All in the `docs/` folder:

| File | Purpose |
|------|---------|
| `BRAND_REFERENCE.md` | Brand overview, voice, colors, audience |
| `INGREDIENT_STORIES.md` | Partner stories for sourcing content |
| `DESIGN_GUIDELINES.md` | Detailed design specs |
| `CLAUDE_WORKFLOW.md` | This file |

---

## Tips

1. **Be specific** — "Update the hero headline" is better than "make changes"
2. **Mention the branch** if you're unsure — "On the redesign branch, update..."
3. **Ask for previews** — "Show me what that will look like" before committing
4. **Reference brand docs** — "Following our brand voice, write..."
5. **Commit often** — Small, frequent commits are easier to track and undo

---

*Update this document as workflows evolve.*
