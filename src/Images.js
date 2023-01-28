import { StyleSheet, Text, View,FlatList,Image} from 'react-native';



const Images = ()=>{

	return (
		<View style ={styles.ImageStyle}>
				<Text style ={styles.TextStyle}>This is my image</Text>
				<Image 
				style = {styles.PhotoStyle}
				source = {require("../assets/image.jpeg")}/>

				<Image 
				style = {styles.PhotoStyle}
				source = {require("../assets/image.jpeg")}/>	

				<Image 
				style = {styles.PhotoStyle}
				source = {require("../assets/image.jpeg")}/>			
		</View>
		)

}

const styles = StyleSheet.create({
	ImageStyle:{
		
		display:"flex",
		justiyfiyContent:"center",
		alignItems:"center"

	},
	TextStyle:{
		fontSize:30,
		margin:30,
	},
	PhotoStyle:{
		width:300,
		height:300,
	}

})

export default Images;