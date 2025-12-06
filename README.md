# ParaTakip - AI-Powered Expense Tracker

ParaTakip is a modern, responsive personal finance application tailored for Turkish and Arabic speaking users. It leverages the **Google Gemini API** to automatically parse expenses from natural language text (like bank SMS notifications or casual notes) into structured data.

## 🌟 Features

*   **AI Smart Entry**: Paste a text like *"A101'den 250 liraya alışveriş yaptım"* and let Gemini extract the amount, category, and description automatically.
*   **Bilingual Support**: Fully localized for Turkish (TR) and Arabic (AR) with RTL layout support.
*   **Dark Mode**: Elegant dark theme using a custom palette (Rich Black & Khaki).
*   **Visual Analytics**: Interactive pie charts to visualize spending habits.
*   **Responsive Design**: Mobile-first architecture ensures a great experience on phones and desktops.
*   **Privacy Focused**: Data is stored locally on your device (`localStorage`).

## 🎨 Color Palette

The application uses a sophisticated color scheme designed for readability and aesthetics:

*   **Dark Background**: `#0a0908` (Rich Black)
*   **Dark Cards**: `#22333b` (Gunmetal)
*   **Light Background**: `#eae0d5` (Platinum)
*   **Accent**: `#c6ac8f` (Khaki)
*   **Primary Action**: `#5e503f` (Walnut)

## 🛠️ Technologies Used

*   **React 19**: Frontend framework.
*   **Tailwind CSS**: Utility-first styling.
*   **Google Gemini API**: Natural language processing for expense parsing.
*   **Recharts**: Data visualization.
*   **React Icons**: Iconography.
*   **TypeScript**: Type safety.

## 🚀 Getting Started

### Prerequisites

*   Node.js installed.
*   A Google Cloud API Key with access to Gemini (Flash model).

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/paratakip.git
    cd paratakip
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Configure your Google Gemini API key:
    - Get your free API key from: https://aistudio.google.com/app/apikey
    - Copy `.env.example` to `.env.local`:
      ```bash
      cp .env.example .env.local
      ```
    - Add your API key to `.env.local`:
      ```env
      API_KEY=your_gemini_api_key_here
      ```

4.  Start the development server:
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`

5.  Build for production:
    ```bash
    npm run build
    npm run preview
    ```

## 🔐 Security Notes

- **Never commit `.env` or `.env.local` files** - your API keys will be exposed
- `.env.local` is already in `.gitignore` 
- Keep your Gemini API key private and regenerate if accidentally exposed

## 📱 Mobile Optimization

This application adds specific meta tags and CSS rules to ensure a native-app-like feel on mobile devices, including:
*   Disabled tap highlights.
*   Hidden scrollbars for cleaner lists.
*   Touch-optimized button sizes.

## 📄 License

This project is licensed under the MIT License.