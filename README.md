

# Git URL Parse

A high level git url parser for common git providers. 

From <https://www.npmjs.com/package/git-url-parse>


## Usage

```yaml
uses: theowenyoung/git-url-parse@v1
with:
  url: https://github.com/theowenyoung/git-url-parse
```

outputs:

- `outputs.result`, json string from the git url obj
- `outputs.full_name`, git repo full_name
- `outputs.owner`, repo owner
- `outpus.name`, repo name

More outpus please visit: <https://www.npmjs.com/package/git-url-parse>