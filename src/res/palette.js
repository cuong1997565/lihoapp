import colors from './colors'
import dimension from './dimension'
const palette = {
  background: {
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    color: colors.text,
    fontSize: dimension.smallFont,
    textAlign: 'center'
  }
}
export default palette

// when using palette
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center'
//     },
//     heading: {...palette.heading, ...{
//       marginTop: 72
//     }}
//   })