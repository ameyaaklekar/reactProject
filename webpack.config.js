module.exports = {
	entry: `${__dirname}/app/index.jsx`,
	output:{
		path: `${__dirname}/dist`,
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{		
				test: /\.jsx$/,
				loader: 'babel-loader',
				query:{
					presets: ['es2015', 'es2016', 'stage-2', 'react']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader?source-map!sass-loader?source-map'
			}
		]
	}
}