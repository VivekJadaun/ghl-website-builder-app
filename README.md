# Website builder

### Run project locally

In the project directory, you can run: `npm start` to run the project locally

### Features added:
#### Sections
- [x] Add
- [x] Move Up/Down
- [x] Clone
- [x] Delete

#### Rows
- [x] Add
- [x] Move Up/Down
- [x] Clone
- [x] Delete

#### Elements
- [x] Add
- [x] Clone
- [x] Delete

#### Noteworthy Points:
- To keep the UI consistent with original zip html, the initial state is rendered with default values which can be configured by modifying the default states in `src\constants\defaults.js`
- Original assets, including css, images & scripts are included in the public dir & left unchanged to keep the UI & basic functionality similar to original.
- Added a custom.js in public/js/main dir to fix few jQuery event handler related issues.