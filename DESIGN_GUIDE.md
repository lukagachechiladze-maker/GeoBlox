# Design Guide - Where to Write Styles

## 🎨 Design System Architecture

Your project uses a **3-layer design system**:

### Layer 1: Global Design System (`src/index.css`)
**Purpose:** Define your design tokens and reusable styles

**Contains:**
- ✅ CSS Variables (colors, shadows, gradients)
- ✅ Custom Component Classes (`.glass-card`, `.btn-primary-glow`)
- ✅ Animations & Keyframes
- ✅ Base HTML/Body styles

**When to edit:**
- Changing your color scheme
- Adding reusable component styles
- Creating new animations
- Modifying global styles

**Example:**
```css
/* Change primary color */
--primary: 200 100% 50%;  /* Blue instead of cyan */

/* Add new custom class */
@layer components {
  .my-custom-button {
    @apply bg-primary text-white px-4 py-2 rounded-lg;
  }
}
```

---

### Layer 2: Tailwind Config (`tailwind.config.ts`)
**Purpose:** Extend Tailwind with your custom theme

**Contains:**
- ✅ Custom colors (references CSS variables)
- ✅ Custom animations
- ✅ Custom spacing, fonts, etc.

**When to edit:**
- Adding new Tailwind utilities
- Extending Tailwind's default theme
- Adding new keyframes/animations

**Example:**
```typescript
extend: {
  colors: {
    'my-custom': 'hsl(var(--primary))',
  },
  animation: {
    'spin-slow': 'spin 3s linear infinite',
  }
}
```

---

### Layer 3: Component Files (`src/components/*.tsx`)
**Purpose:** Apply styles directly to components

**Contains:**
- ✅ Tailwind utility classes
- ✅ Custom classes from `index.css`
- ✅ Inline styles (when needed)

**When to edit:**
- Styling specific components
- Responsive design
- Component-specific layouts

**Example:**
```tsx
<div className="bg-card text-foreground p-4 rounded-lg hover:bg-card-hover">
  <h2 className="text-2xl font-bold gradient-text">Title</h2>
</div>
```

---

## 📝 Quick Reference

### Change Colors
**File:** `src/index.css` (lines 8-57)
```css
:root {
  --primary: 187 100% 42%;  /* Your cyan color */
  --background: 240 10% 4%;   /* Dark background */
}
```

### Add Custom Button Style
**File:** `src/index.css` (inside `@layer components`)
```css
.btn-custom {
  @apply bg-primary text-white px-6 py-3 rounded-lg;
  box-shadow: 0 0 20px hsl(var(--primary) / 0.4);
}
```

### Style a Component
**File:** `src/components/YourComponent.tsx`
```tsx
<div className="glass-card p-6">
  <h1 className="section-title gradient-text">Title</h1>
</div>
```

### Add Animation
**File:** `src/index.css` (inside `@layer utilities`)
```css
.animate-bounce-slow {
  animation: bounce 2s infinite;
}
```

---

## 🎯 Common Tasks

### Task: Change Primary Color
1. Open `src/index.css`
2. Find `--primary: 187 100% 42%;` (line 19)
3. Change to your color (HSL format)
4. Save - changes apply everywhere!

### Task: Create New Button Style
1. Open `src/index.css`
2. Add inside `@layer components`:
```css
.btn-new-style {
  @apply bg-accent text-white px-8 py-4 rounded-xl;
}
```
3. Use in components: `className="btn-new-style"`

### Task: Style a Specific Component
1. Open the component file (e.g., `HeroSection.tsx`)
2. Add Tailwind classes directly:
```tsx
<div className="bg-primary/10 p-8 rounded-2xl">
```

---

## 🔍 Available Custom Classes

From `src/index.css` - use these anywhere:

- `.glass-card` - Glass morphism effect
- `.gradient-text` - Gradient text effect
- `.glow-text` - Glowing text
- `.btn-primary-glow` - Primary button with glow
- `.btn-outline-glow` - Outline button with glow
- `.hover-lift` - Hover lift animation
- `.badge-discount` - Discount badge
- `.badge-stock` - Stock badge
- `.section-title` - Section heading style
- `.animate-float` - Floating animation
- `.animate-fade-in` - Fade in animation

---

## 💡 Best Practices

1. **Use CSS variables** for colors (in `index.css`)
2. **Create reusable classes** in `@layer components`
3. **Use Tailwind utilities** for one-off styles
4. **Keep component styles** in component files
5. **Don't use inline styles** unless necessary

---

## 🚀 Quick Start

**Want to change the theme color?**
→ Edit `src/index.css` line 19: `--primary`

**Want to add a new button style?**
→ Add to `@layer components` in `src/index.css`

**Want to style a component?**
→ Add Tailwind classes in the component `.tsx` file
