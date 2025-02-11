
🚀 MFE Atelier Mehdi Jabbour

```
Ce projet utilise **Module Federation** pour une architecture **microfrontend**, avec une **application hôte** et une **application distante**.
```
## 📂 Structure du projet

```
/mfe-atelier-mehdi-jabbour  # Microfrontend (remote)
  ├── src/
  │   ├── header/  # Composant exposé
  ├── webpack.config.js
  ├── package.json
/mfe-atelier-mehdi-jabbour-appshell  # Application principale (host)
  ├── src/
  ├── webpack.config.js
  ├── package.json
```

## 📦 Installation
```sh
# Depuis la racine des projets
npm install
```

## ▶️ Lancer le projet
Démarrer d'abord l'application distante (**remote**), puis l'application hôte (**host**).

```sh
# Terminal 1 : Lancer le remote
cd mfe-atelier-mehdi-jabbour
npm run dev

# Terminal 2 : Lancer le host
cd ../mfe-atelier-mehdi-jabbour-appshell
npm run dev
```

## 🔗 Accès
- **Remote (Microfrontend) :** [http://localhost:3000](http://localhost:3000)  
- **Host (Application principale) :** [http://localhost:2000](http://localhost:2000)  

## 🔧 Configuration Module Federation

### **Host (`mfe-atelier-mehdi-jabbour-appshell`)**
```js
new ModuleFederationPlugin({
  name: "host",
  remotes: {
    mfeAtelierMehdiJabbour: "mfeAtelierMehdiJabbour@http://localhost:3000/remoteEntry.js",
  },
});
```

### **Remote (`mfe-atelier-mehdi-jabbour`)**
```js
new ModuleFederationPlugin({
  name: "mfeAtelierMehdiJabbour",
  filename: "remoteEntry.js",
  exposes: {
    "./header": "./src/header",
  },
});
```

## 📝 Notes
- Vérifie que `remoteEntry.js` est bien accessible sur `http://localhost:3000/remoteEntry.js`.
- Si un module n'est pas trouvé, vérifie le **nom exposé dans la config Webpack**.
- L'import dans le **host** doit être :
  ```js
  const Header = React.lazy(() => import("mfeAtelierMehdiJabbour/header"));
  ```

