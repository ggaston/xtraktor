# Xtraktor

Generate separate component files from oldschool CSS files (all style declarations in one place)

TODO:

- [x] Extraction on comment section `/** ... **/`
- [ ] Extraction based on class name

## Usage

```
cd [cloned repo folder]
npm i -g
xtrakt comments [input file] [output folder]
```

## Example

```
xtrakt comments styles.css assets/css/components
```