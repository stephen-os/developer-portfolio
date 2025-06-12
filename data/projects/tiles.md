---
title: "Tiles"
description: "A 2D map creator with texture atlas importing, layer-based editing, and export features for building detailed 2D worlds."
image: "projects/tiles/application.png"
---

# Tiles
---

**Tiles** is a 2D map creator that allows users to upload texture atlases and build detailed 2D worlds. It features a **layer-based approach**, enabling users to organize, edit, and toggle textured layers for precise control. The tool includes essential features like erase and fill tools for modifying large areas efficiently. Projects can be **saved and loaded** for continued editing and exported as a **single image** or **multiple grouped layers**, depending on user needs.

![Tiles Screenshot](projects/tiles/application.png)

## 🚀 Features

✅ **Layer-Based Editing** – Organize your tiles into layers that can be toggled on/off for easier editing.  
✅ **Tile Placement Tools** – Place, erase, and fill tiles effortlessly.  
✅ **Texture Uploading** – Import your own textures for a personalized mapping experience.  
✅ **Project Saving & Loading** – Save your progress and continue editing later.  
✅ **Exporting** – Export maps as PNG images with custom layer groupings.

🎨 Inspiration

Tiles was inspired by the popular framework Tiled, which provides a structured approach to tile-based map editing. The rendering framework Lumina used in this project was inspired by TheCherno's Walnut engine. The goal was to create a streamlined and intuitive tool for building 2D environments with modern rendering capabilities.

## 🔧 Technical Dependencies

Tiles is built using several key libraries:

- **[Lumina](https://github.com/stephen-os/Lumina)** – A custom rendering and application framework.  
- **[ImGui](https://github.com/stephen-os/imgui)** – A GUI library for in-application UI controls.  
- **[ImGuiFileDialog](https://github.com/stephen-os/ImGuiFileDialog)** – A file dialog extension for ImGui, allowing easy texture selection.  
- **[GLFW](https://github.com/stephen-os/glfw)** – Handles window management and input handling.  
- **[Glad](https://github.com/stephen-os/glad)** – An OpenGL loader that manages API function pointers.  
- **[GLM](https://github.com/g-truc/glm)** – A C++ mathematics library optimized for graphics applications.  

## 🎨 Font

ModeSeven by Andrew Bulhak.

![Factory Level 1](projects/tiles/factory-level-1.png)

## 📥 Installation & Usage

### 🔧 Prerequisites

- Windows OS  
- [Visual Studio 2017 or higher](https://visualstudio.microsoft.com/)  

### 🛠️ Setup Instructions

1. Clone the repository with all dependencies:

   ```sh
   git clone --recursive https://github.com/stephen-os/Tiles.git
