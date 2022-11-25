aloita backend-kansio ensin (npm start) sitten aloita blogist-frontend-kansio (npm start)

!muista, että node.js:stä on erilaisia ​​versioita, kaikkia ei tarvitse asentaa!


npm install
npm install axios
Sudo npm install -g json-server (mac)
npm install cors
npm install mongoose
Npm start


backend
npm install
npm install --save-dev jest
npm install --save-dev cross-env
npm install cross-env -P
npm install --save-dev supertest
npm install express-async-errors
npm install bcrypt
npm install jsonwebtoken

npm test -- tests/note_api.test.js
npm test -- -t "a specific note is within the returned notes"
npm test -- -t 'notes'

blogist-frontend
npm install
npm run dev
npm start
npm install prop-types
npm install --save-dev eslint-plugin-jest
npm install --save-dev @testing-library/react @testing-library/jest-dom

CI=true npm test
$env:CI=$true; npm test

npm install --save-dev @testing-library/user-event
npm install -D --exact jest-watch-typeahead@0.6.5
CI=true npm test -- --coverage

npm install --save-dev cypress
npm run cypress:open
npm install eslint-plugin-cypress --save-dev
npm run start:test
npm run test:e2e