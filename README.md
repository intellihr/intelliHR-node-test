# intelliHR-node-test

The `/api/search?superhero={name}` API endpoint allows you to request the full data from a superhero and display the results in its response.

Use a tool of your preferenance (postman, insomnia, etc) to execute the API requests.

- Note: Each successfull or failed response should be returned with its corresponding status code(eg: 2xx, 4xx, 5xx)

## Tasks:
- Store the superhero search name together with the fullname of the superhero returned from the `superhero` API endpoint and a randomly generated `id` in the `search.json` file. It's up to you to decide the format for storing the data in the `search.json` file.
- Create an API endpoint under `api/{path}/list` where it returns all the data stored in `search.json` file (our search list).
- Create an API endpoint under `api/{path}/:id` where you can delete a superhero search record from the `search.json` file based on its id.

### Extra Tasks (Optional):
- Validate the id passed on the endpoint's path before removing the record (eg: `abc` as id should not be accepted).
- Add unit tests on your created endpoints for testing their functionality.

### Helpful links:
- https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
- https://nodejs.org/api/fs.html#fspromiseswritefilefile-data-options
- https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
- https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/