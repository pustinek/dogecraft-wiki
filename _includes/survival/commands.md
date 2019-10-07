
# Commands

## Worlds and Warps
    /spawn : Warp to spawn
    /market : Warp to market
    /warps : Open the warps GUI
    /tpa -player- : Request to teleport to that player
    /tpahere -player- : Request to teleport that player to you
    
## Chat
    /msg -player- -message- : send player a pm, hit enter without a message to chat with just the player
    /r -message- : reply to a pm, hit enter without a message to chat with just the player
    /mail send -player- -message- : send mail to that player with the message, works even if they are offline
    /ignore -player- : ignores player in chat, they can see your messages but can't send tpa requests, pms or money   
    
 ## Chest Shops
    /cshop create -amount- -price- -buyback- : create a chest shop with the item in your hand, the specific amount to sell at the price and buy back from the players. Please enter the command then right click a chest to set up the shop. You may use 0 for either the price or the buy back price but not both. SPECIAL NOTE: when making cshops with spawners please use the command then switch to a FREE hand to right click the chest to create the shop.
    /cshop remove : right click the cshop you would like to remove    
    
## Homes
    /homes : list all your homes
    /sethome -name- : Set a home
    /delhome -name- : Delete home
    /home -name- : Teleport to that homes
    
## Links + Info
    /donatepls : brings up link to the shop
    /rules : link to the rules on the website
    /rulebook : opens rulebook gui - coming soon
    /rulebook give : gives a hard copy of the rules in game - coming soon
    /qrules : opens quick rulebook gui - coming soon
    /qrules give : gives a hard copy of the quick rules in game - coming soon
    /discord : link to our discord
    /website : website link    
    
## Mail
    /mail : mail menu
    /mail read : read mail
    /mail send -player- -message- : send mail to that player with the message, works even if they are offline
    
## McMMO
    /mcstats : This lets you view all of you main McMMO stats
    /mcrank : This shows you the rank of each of your skills compared to other players on the server
    /mctop : shows top 10 players 
    /mctop -skill- : shows top 10 players for the skill
    /-skill- : shows info for skill plus info about bonuses
    /-skillname- -page- : shows different help pages  
    /mcscorboard keep - keeps scoreboard up
    /mcscorboard clear : clear the scoreboard
    /mcscorboard time -n- : clear the scoreboard after -n- seconds   
    /party  : displays party information
    /party create -name- : create an mcmmo party
    /party invite <player> : invite player to the party
    /partychat or /p -message- : hit enter without a message to chat in party chat
    /party leave : leave party
    /party accept : join party
    /party xpshare equal/none : set party exp share, players do need to be within a radius to benefit from shared exp gain
       
## Money
    /market - Warp to the server market
    /bal -player- : View player's balance
    /baltop : View top balances globally
    /pay -player- -amount- : Pay player money
    
 ## Voting
    /vote : displays sites for voting
    /vote gui : shows more info on voting including total votes - temporarily unavailable
    /milestones : shows the MONTHLY rewards for voting
    
 ## Misc
    [i] : Show item in your hand
    /ah : opens auction house gui
    /ah sell -price- -amount- : sells item in your hand for the price, amount can be left off if it is a single item, unlocked with /ranks
    /chatcolor : displays what your current chatcolor is
    /chatcolor gui : opens the chatcolor gui and shows what chatcolors you have available, more unlocked in the store!
    /hat : wear items on your head, unlocked via easter event
    /seen -player- : Last seen the player online, will display how long they have been on if currently online
    /pet : opens the pets gui, right click to interact with pet. Remove pet will just make them go away not delete them. Can be obtained from companion eggs found in vote crates.
 
## Job Perks! 
    /effects : opens the effects gui, if this is the first time you've unlocked an effect i.e. night vision you may need to relog before it applies
    /top : put you up the top block above you, unlocked with /jobs
    /feed : unlocked with /jobs 
    /heal : unlocked with /jobs
    /thru : go through walls , unlocked with /jobs 
    /head or /hdb : access head database, unlocked with /jobs
    
## Rank perks!   
    /fly : unlocked with Mastery - vote everyday! unlocked with /ranks
    /craft : pulls up a crafting table gui, unlocked with /ranks
    /pweather : displays current weather, unlocked with /ranks
    /pweather reset : resets weather, unlocked with /ranks
    /pweather storm/clear/sun : changes weather, unlocked with /ranks
    /trash : opens a trash can, unlocked with /ranks
    /creative : teleport to creative, unlocked with /ranks
    /blocks or /condense : condenses any material into blocks ( from ingots, dust, etc ), unlocked with /ranks
    /ec or /echest : opens enderchest, unlocked with /ranks
    /back : takes you back to your last location, does not include residence warps, unlocked with /ranks
    /nick : change your nickname, unlocked with /ranks. Color nick names can be done with /nick &#Name - unlocked with donation ranks
    /disguise Giant, unlocked with /ranks
    /undis : undisguise you
    
## Donation Perks!    
    /ptime : set the time for yourself, unlocked with donation ranks
    /pv # : open private vault #, unlocked with /ranks and donation ranks
    /kittycannon : summon a kitty cannon, unlocked via donation rank vip+  
    /Filter : item filter unlocked in the store!
    /NoFall toggle : toggle no fall damage, unlocked in the store!
    /Invsee -player- : see other players inventories, unlocked via donation ranks
    /afk : toggle afk/ don't get kicked while afk, unlocked via donation ranks
    /afk -message- : unlocked via donation rank vip+
    /jump : jump to where your crosshairs are pointed, unlocked via donation rank vip+  
    /clear : Clear your whole inventory, unlocked via donation rank vip+   
    /kittycannon : force a kittycannon, unlocked via donation rank vip+  
    /fix all : Ability to repair all items, unlocked via donation rank vip+ 
    /disguise -more-, unlocked via donation ranks:
    Fox, Fox (baby), Cat, Cat (baby), Cod, Dolphin, Panda, Panda (baby), Turtle, Turtle (baby), Polar bear, Polar bear (baby), Tropical_fish, Minecart_tnt
    
 ## Residence
    /res : residence help pages
    /res create -ResidenceName- : create a residence
    /res remove -ResidenceName- : remove a residence
    /res removeall : remove all your residences
    /res subzone -SubZoneName- : create a subzone in your residence. You must be the owner to do this.
    /res show : shows the outline of the residence in particles
    /res info : displays info on current residence
    /res list : list residences you own
    /res listall : list all residences globally
    /res limits : list all important limitations like how many you can have and size
    /res sublist : list all subzones in current residence

### Res Flag Commands
    /res padd -playername- : adds player to the residence 
    /res pset -PlayerName- -flag- -true/false/remove- : set flags on player
    /res set -flag- -true/false/remove- : set flags on residences
    /res set : brings up gui to toggle all the flags on the residence

### Res Utility Commands
    /res expand -amount- : Expands residence in direction you are facing by specified amount
    /res contract -amount- : Contracts residence in direction you are facing by specified amount
    /res default -residence- : Restores residence to default flags
    /res give -residence- -player- : Gives residence player. Player must be online and you have to own the residence
    /res lists : residence permission lists
    /res message -residence- -enter/leave- -message- : Don't have to enter res name if standing in it when typing the command. Sets enter/exit message
    /res message -residence- remove -enter/leave- : removes a enter or leave message
    /res mirror -source- -target- : mirrors perms from one residence to another. You must be owner of both to do this.
    /res rename -OldName- -NewName- : Rename a residence. For subzones, OldName must the the full name(parent.subzone), while NewName is only the new name.
    /res tp -residence- : teleport to a res
    /res tpset : set the teleport location in your residence
    /res unstuck : moves you outside the protected area   
    
    
