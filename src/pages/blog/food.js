import Head from 'next/head';
import { Back, Blog } from '../../Components';
import './_scss/blog.scss';

const BlogItem = () => {

	return (<main>
        <Head>
            <title>Swimmer ♬ Blog</title>
        </Head>
        <Back/>
        <section className="blog">
			<div className="article">
				<h1>Food</h1>
				<p>
					I ordered a book "How Not To Die" and this is a summary of all the ingredients (the 
					"Daily Dozen") that is adviced to eat every day:
				</p>
				<img className="avatar" src="../../images/blogs/food.png" alt="Avatar"/>
				<h2>3 servings of beans</h2>
				<p>1 serving means 32g hummus -or- 64g cooked -or- 128g fresh</p>
				<ul className="food">
					<li>black beans</li>
					<li>butter beans</li>
					<li>cannellini beans</li>
					<li>chickpeas</li>
					<li>edamame</li>
					<li>English peas</li>
					<li>great northern beans</li>
					<li>kidney beans</li>
					<li>lentils (red, beluga, French)</li>
					<li>miso</li>
					<li>navy beans</li>
					<li>pinto beans</li>
					<li>small red beans</li>
					<li>yellow or green split peas</li>
					<li>tempeh</li>
				</ul>
				<h2>1 serving of berries</h2>
				<p>1 serving means 64g fresh or frozen -or- 32g dried</p>
				<ul className="food">
					<li>acaï berries</li>
					<li>barberries</li>
					<li>blackberries</li>
					<li>blueberries</li>
					<li>cherries</li>
					<li>concord grapes</li>
					<li>cranberries</li>
					<li>Goji berries</li>
					<li>kumquats</li>
					<li>mulberries</li>
					<li>raspberries</li>
					<li>strawberries</li>
				</ul>
				<h2>3 servings of other fruits</h2>
				<p>1 serving means 1 medium fruit -or- 128g sliced fruit -or- 32g dried fruit</p>
				<ul className="food">
					<li>apples</li>
					<li>dried apricots</li>
					<li>avocados</li>
					<li>bananas</li>
					<li>melon</li>
					<li>clementine</li>
					<li>dates</li>
					<li>dried figs</li>
					<li>grapefruit</li>
					<li>honeydew</li>
					<li>kiwis</li>
					<li>lemons</li>
					<li>limes</li>
					<li>lychee</li>
					<li>mangoes</li>
					<li>nectarines</li>
					<li>oranges</li>
					<li>papaya</li>
					<li>passion fruit</li>
					<li>peaches</li>
					<li>pears</li>
					<li>pineapple</li>
					<li>plums</li>
					<li>pluots</li>
					<li>pomegranates</li>
					<li>plums</li>
					<li>tangerines</li>
					<li>watermelon</li>
				</ul>
				<h2>1 serving of cruciferous vegetables</h2>
				<p>1 serving means 64g of chopped vegetables</p>
				<ul className="food">
					<li>arugula</li>
					<li>bok choy</li>
					<li>broccoli</li>
					<li>Brussels sprouts</li>
					<li>cabbage</li>
					<li>cauliflower</li>
					<li>kale</li>
					<li>horseradish</li>
					<li>black kale</li>
					<li>green kale</li>
					<li>red kale</li>
					<li>mustard green</li>
					<li>radish</li>
					<li>turnip greens</li>
					<li>watercress</li>
				</ul>
				<h2>2 servings of greens</h2>
				<p>1 serving means: 128g raw -or- 64g cooked</p>
				<ul className="food">
					<li>arugula</li>
					<li>beet greens</li>
					<li>kale</li>
					<li>red kale</li>
					<li>black kale</li>
					<li>green kale</li>
					<li>mesclun mix (assortment of young salad vegetables)</li>
					<li>turnip greens</li>
				</ul>
				<h2>2 servings of Other Vegetables</h2>
				<p>
					1 serving means 128g of raw leafy vegetables -or- 64g non-leaf, 64g cup vegetable juice 
					-or- 32g cup dried mushrooms
				</p>
				<ul className="food">
					<li>artichokes</li>
					<li>asparagus</li>
					<li>beets</li>
					<li>paprika</li>
					<li>carrots</li>
					<li>corn</li>
					<li>garlic</li>
					<li>mushrooms (button, oyster, portobello, shiitake)</li>
					<li>okra</li>
					<li>onions</li>
					<li>purple potatoes</li>
					<li>pumpkin</li>
					<li>sea vegetables (arame, dulse, nori)</li>
					<li>peas</li>
					<li>squash (delicata, summer, spaghetti squash varieties)</li>
					<li>sweet potatoes</li>
					<li>yams</li>
					<li>tomatoes</li>
					<li>zucchini</li>
				</ul>
				<h2>1 serving of linseed gold or brown</h2>
				<p>1 serving means 1 tablespoon</p>
				<h2>1 serving of nuts</h2>
				<p>1 serving means 32g of nuts or seeds -or- 2 tablespoons nut or seed butter</p>
				<ul className="food">
					<li>almonds</li>
					<li>Brazil nuts</li>
					<li>cashew nuts</li>
					<li>chia seeds</li>
					<li>hazelnuts</li>
					<li>hemp seeds</li>
					<li>macadamia nuts</li>
					<li>pecan nuts</li>
					<li>walnuts</li>
				</ul>
				<h2>1 serving of spices</h2>
				<p>1 serving means 1/4 teaspoon of turmeric[^1] with another spice</p>
				<ul className="food">
					<li>allspice</li>
					<li>barberry</li>
					<li>basil</li>
					<li>laurel</li>
					<li>cardamom</li>
					<li>chili powder</li>
					<li>cinnamon</li>
					<li>clove</li>
					<li>coriander</li>
					<li>cumin</li>
					<li>curry powder</li>
					<li>dill</li>
					<li>fenugreek</li>
					<li>garlic</li>
					<li>ginger</li>
					<li>horseradish</li>
					<li>lemongrass</li>
					<li>marjoram</li>
					<li>mustard powder</li>
					<li>nutmeg</li>
					<li>oregano</li>
					<li>smoked paprika</li>
					<li>parsley</li>
					<li>pepper</li>
					<li>peppermint</li>
					<li>rosemary</li>
					<li>Sage</li>
					<li>thyme</li>
					<li>turmeric</li>
					<li>vanilla</li>
				</ul>
				<h2>3 servings of whole wheat</h2>
				<p>
					1 serving means 64g of hot breakfast cereals or cooked cereals, pasta or corn kernels -or- 64g cold 
					cereal -or- 1 tortilla or sandwich -or- 1/2 bagel -or- 1/2 English muffin -or- 384g popped popcorn
				</p>
				<ul className="food">
					<li>barley</li>
					<li>brown rice</li>
					<li>buckwheat</li>
					<li>millet</li>
					<li>oats</li>
					<li>popcorn</li>
					<li>quinoa</li>
					<li>rye</li>
					<li>teff</li>
					<li>whole-weat pasta</li>
					<li>wild rice</li>
				</ul>
				<h2>5 servings of drinks</h2>
				<p>1 portion means 1 glass</p>
				<ul className="food">
					<li>black tea</li>
					<li>chai tea</li>
					<li>vanilla chamomile tea</li>
					<li>coffee</li>
					<li>earl gray tea</li>
					<li>green tea</li>
					<li>hibiscus tea</li>
					<li>hot chocolate</li>
					<li>jasmin tea</li>
					<li>lemon balm tea</li>
					<li>matcha tea</li>
					<li>almond blossom oolong tea</li>
					<li>peppermint tea</li>
					<li>rooibos tea</li>
					<li>water</li>
					<li>white tea</li>
				</ul>
				<h2>1 portion of exercise</h2>
				<p>1 serving means 90 minutes moderate
				-or- 40 minutes vigorous</p>
				<h3>Mediocre</h3>
				<ul className="food">
					<li>bicycles</li>
					<li>canoeing</li>
					<li>dancing</li>
					<li>dodge ball</li>
					<li>to ski</li>
					<li>screens</li>
					<li>to walk</li>
					<li>domestic work</li>
					<li>ice skating</li>
					<li>inline skating</li>
					<li>juggling</li>
					<li>to jump</li>
					<li>pedal boats</li>
					<li>frisbee</li>
					<li>roller skating</li>
					<li>shoveling snow</li>
					<li>skateboarding</li>
					<li>snorkeling</li>
					<li>surf</li>
					<li>recreational swimming</li>
					<li>water skiing</li>
					<li>garden work</li>
					<li>yoga</li>
				</ul>
				<h3>Powerful</h3>
				<ul className="food">
					<li>backpacking</li>
					<li>basketball</li>
					<li>cycling uphill</li>
					<li>circuit strength training</li>
					<li>cross-country skiing</li>
					<li>football</li>
					<li>hockey</li>
					<li>to jog</li>
					<li>jumping jacks</li>
					<li>jumping rope</li>
					<li>lacrosse</li>
					<li>push ups</li>
					<li>pull ups</li>
					<li>racquetball</li>
					<li>rock climbing</li>
					<li>rugby</li>
					<li>to run</li>
					<li>swim laps</li>
					<li>walk uphill</li>
					<li>water jogging</li>
				</ul>
				<p>Note: turmeric needs black pepper to activate it</p>
			</div>
		</section>
    </main>);
}

export default BlogItem;