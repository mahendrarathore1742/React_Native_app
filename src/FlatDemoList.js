import { StyleSheet, Text, View,FlatList} from 'react-native';


const FlatDemoList = ()=>{

	const name = [
	{
		"index" : "1",
		"name" :"Mahendra",
	},
	{
		"index" : "2",
		"name" :"Mahendra",
	},	
	{
		"index" : "3",
		"name" :"Mahendra",
	},
	{
		"index" : "4",
		"name" :"Mahendra",
	},
	{
		"index" : "5",
		"name" :"singh",
	},];


	return <FlatList  style={styles.listStyle}
			keyExtractor = {(key)=>{
				return key.index;
			}}
			horizontal
			inverted
			 showsHorizontalScrollIndicator={false}
	 		data = { name } renderItem={(ele)=>{
			return (<Text style = {styles.textStyle}>{ele.item.name}</Text>)
	}} />
}


const styles = StyleSheet.create({
	textStyle : {
		fontSize:40,
		padding:30,
		backgroundColor:"blue",
		margin:20,
		color:"white"
	},
	listStyle:{
		textAlign:"center",
		margin:20,
		padding:10,
	},
})

export default FlatDemoList;