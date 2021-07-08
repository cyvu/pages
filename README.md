---
title: Pages | Readme
layout: base.njk
---

> Config
> ======
>
> This folder contains most settings for the project. npm installs should be performed here as well.


> ### Prerequisites
>
> - **Install npm**
> `sudo apt install npm -y`
>
> - **Install git**
> `sudo apt install git -y`
>
> - **Setup folder-dir**
> `mkdir -p ~/source/repo/web/pages && cd ~/source/repo/web/pages`


> ### Setup
>
> 1. **Initiate git**
> `git init`
>
> 2. **Setup git config** <br>
> (note: replace *italic* with real values)
> `git config --global user.name ***your username***`
> `git config --global user.email ***your email***`
> `git config --global credential.helper 'cache --timeout=3600'`
> `git remote add origin https://github.com/cyvu/pages.git`
>
> 3. **Download the project**
> `git pull`
>
> 4. **Switch branch** *Optional*
> `git checkout development`
>
> 5. **Install eleventy** <br>
> Change directory to the projects **Config** directory
> `cd ~/source/repo/web/pages/config`
> `npm install @11ty/eleventy --save-dev`


> ### Building,<br> running and<br> configurating the project
>
> The provided bash script, *server.sh*, is located in the root folder where the folders config/ and private_html/ resides. The script handles building, running and other configurations. 
> For now it takes the following arguments: build, serve (or start), set-dev and set-prod.
> 
> Run it by executing the following in the terminal:
> `cd ~/source/repo/web/pages`
> `chmod +x server.sh`
> `./server.sh ***argument***`
>
> Omiting an argument gives you a list of available commands to run.