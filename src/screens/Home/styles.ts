import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    borderRadius: 8,
    height: 48,
    width: '80%',
    marginRight: 16,
    marginTop: 24,
    paddingHorizontal: 16
  },
  button:{
    backgroundColor: 'green',
    borderRadius: 8,
    height: 48,
    width: 48,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#FDFCFE',
    fontSize: 24
  },
  containerForm:{
    width: '100%',
    flexDirection: 'row',
    marginBottom: 34
  }
})