# CostBasisUiRemoteApp

```
ng new cost-basis-ui-remote-app

ng g lib recon
ng g lib admin-view
ng g lib my-shared-lib

cd projects/recon/src/lib
ng g c dod


cd projects/admin-view/src/lib
ng g c mask


# Build the libs
ng build admin-view
ng build recon
ng build my-shared-lib

ng build

# In Main
ng g m first --routing

```

- Every Time you make the changes in share lib, we need to build the shared libs.

  ```
  ng build admin-view
  ng build recon
  ng build my-shared-lib

  ng build


  # OR UPDATE package.json
  "build": "ng build admin-view && ng build recon &&  ng build",

  npm run build
  ng serve
  ```

  # Add Module Federation Now. Make the project remote

  ```
  ng add @angular-architects/module-federation --type remote --port 4201

  ```

# Create host application

```
ng new host-app

ng add @angular-architects/module-federation --type host --port 4200
```
