Config
======

This folder contains most settings for the project. npm installs should be performed here as well.


Set-up
------


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

------

> ### Setup
>
> 1. **Initiate git**
> `git init`
>
> 2. **Setup git config** (note: replace *italic* with real values)
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
> 5. **Install eleventy**
> Change directory to the projects **Config** directory
> `cd ~/source/repo/web/pages/config`
> `npm install @11ty/eleventy --save-dev`

------

> ### Building, running and configurating the project
>
> **Building and running the development server**
>
> Next we build or run the server with the following commands, 
> which are defined in the package.json file
> `npm run build`
> `npm run start`


