Search.setIndex({docnames:["backpropagate","broadcasting","chainrule","contributing","convolution","cuda","derivative","dropout","index","matrixmult","mlprimer","module0","module1","module2","module3","module4","modules","parallel","pooling","property_testing","scalar","setup","softmax","tensor","tensordata","tensorops","training","visualization"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.todo":2,sphinx:56},filenames:["backpropagate.rst","broadcasting.rst","chainrule.rst","contributing.rst","convolution.rst","cuda.rst","derivative.rst","dropout.rst","index.rst","matrixmult.rst","mlprimer.rst","module0.rst","module1.rst","module2.rst","module3.rst","module4.rst","modules.rst","parallel.rst","pooling.rst","property_testing.rst","scalar.rst","setup.rst","softmax.rst","tensor.rst","tensordata.rst","tensorops.rst","training.rst","visualization.rst"],objects:{"minitorch.FunctionBase":{chain_rule:[12,1,1,""]},"minitorch.Module":{_modules:[16,2,1,""],_parameters:[16,2,1,""],eval:[11,1,1,""],mode:[16,2,1,""],named_parameters:[11,1,1,""],train:[11,1,1,""]},"minitorch.Scalar":{__add__:[12,1,1,""],__lt__:[12,1,1,""],__mul__:[12,1,1,""],__neg__:[12,1,1,""],data:[20,2,1,""]},"minitorch.TensorData":{permute:[13,1,1,""]},"minitorch.TensorFunctions.Copy":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.TensorFunctions.LT":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.TensorFunctions.Log":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.TensorFunctions.Mean":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.TensorFunctions.Mul":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.TensorFunctions.ReLU":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.TensorFunctions.Sigmoid":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.Variable":{derivative:[20,2,1,""],history:[20,2,1,""],name:[20,2,1,""]},"minitorch.cuda_ops":{tensor_map:[14,1,1,""],tensor_reduce:[14,1,1,""],tensor_zip:[14,1,1,""]},"minitorch.fast_ops":{tensor_map:[14,1,1,""],tensor_reduce:[14,1,1,""],tensor_zip:[14,1,1,""]},"minitorch.operators":{add:[11,1,1,""],addLists:[11,1,1,""],id:[11,1,1,""],lt:[11,1,1,""],map:[17,3,0,"-"],mul:[11,1,1,""],neg:[11,1,1,""],negList:[11,1,1,""],prod:[11,1,1,""],reduce:[11,1,1,""],relu:[11,1,1,""],relu_back:[11,1,1,""],sigmoid:[11,1,1,""],sum:[11,1,1,""],zipWith:[11,1,1,""]},"minitorch.scalar":{central_difference:[12,1,1,""]},"minitorch.scalar.Add":{backward:[12,1,1,""],forward:[12,1,1,""]},"minitorch.scalar.LT":{backward:[12,1,1,""],forward:[12,1,1,""]},"minitorch.scalar.Mul":{backward:[12,1,1,""],forward:[12,1,1,""]},"minitorch.scalar.Neg":{backward:[12,1,1,""],forward:[12,1,1,""]},"minitorch.scalar.ScalarFunction":{backward:[12,1,1,""],forward:[12,1,1,""]},minitorch:{FunctionBase:[20,0,1,""],Module:[16,0,1,""],Parameter:[16,0,1,""],Scalar:[20,0,1,""],ScalarFunction:[20,0,1,""],Variable:[20,0,1,""],argmax:[15,1,1,""],avgpool2d:[15,1,1,""],backpropagate:[12,1,1,""],broadcast_index:[13,1,1,""],count:[13,1,1,""],cuda_matmul:[14,1,1,""],dropout:[15,1,1,""],index_to_position:[13,1,1,""],logsoftmax:[15,1,1,""],matmul:[14,1,1,""],matrix_multiply:[14,1,1,""],max:[15,1,1,""],maxpool2d:[15,1,1,""],shape_broadcast:[13,1,1,""],softmax:[15,1,1,""],tensor_conv2d:[15,1,1,""],tensor_map:[13,1,1,"id0"],tensor_ops:[13,3,0,"-"],tensor_reduce:[13,1,1,"id6"],tensor_zip:[13,1,1,"id5"],tile:[15,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","function","Python function"],"2":["py","attribute","Python attribute"],"3":["py","module","Python module"]},objtypes:{"0":"py:class","1":"py:function","2":"py:attribute","3":"py:module"},terms:{"0_1":10,"0_2":10,"100":11,"10000":19,"10x":14,"1_1":10,"1_2":10,"8097":27,"abstract":16,"break":25,"case":[1,10,13,19,24],"catch":19,"class":[2,10,11,12,13,16,20,21,25],"default":0,"final":[0,1,8,10,12,14,24,27],"float":[11,12,13,14,15,19,20],"function":[0,2,3,5,6,9,10,12,13,14,15,16,17,19,23,24,25,27],"import":[0,5,11,14,16,17,19,21,24,27],"int":[3,12,13,14,15],"long":2,"new":[0,10,11,12,13,14,15,20,21,23,24,25],"return":[1,2,3,5,10,11,12,13,15,16,17,20,25],"short":17,"static":20,"super":[16,19,24],"switch":17,"true":[5,11,12,13,17],"try":[1,10],"while":[0,6,19,20,27],And:[10,12,13,14,15,20,25],But:[1,2,5,10,19],Doing:10,For:[1,2,3,5,9,10,11,16,17,19,20,21,23,24,25,27],IDE:3,Its:[0,2],Not:10,One:10,PTS:12,Such:11,That:[1,19],The:[0,2,5,6,8,9,10,12,13,14,16,17,20,21,23,24,25,27],Then:[3,6,8,12,24],There:[9,10,16,17,20,21,27],These:[1,3,8,10,11,13,14,23,25],Use:11,__add__:12,__init__:16,__lt__:12,__mul__:12,__neg__:12,_add_deriv:0,_map:17,_modul:16,_paramet:16,a_shap:[13,14],a_storag:[13,14],a_strid:[13,14],abil:20,abl:[3,10,12,13,14,20],about:[1,6,8,16,17,20,21,23,24,25],abov:[1,2,5,9,10,12,24,25],absolut:10,access:[5,14,16,20,24],account:[1,21],accuraci:14,act:[0,10,20],activ:[0,12,13,14,15,21],actual:[1,17,19,23],add:[0,1,11,12,13,14,15,19,24],added:[1,11],adding:1,addit:[2,3,10,13,14,24],addition:[16,24],addlist:11,address:16,addtimes2:2,advantag:[14,15,17],again:[1,9,14,17,23],aggreg:23,ago:5,agre:16,ahead:11,aim:[8,10],algorithm:12,align:25,all:[0,1,3,5,6,10,11,12,13,14,15,16,17,20,21,23,25],allow:[1,10,13,16,17,20,23,24],almost:[10,23],alon:17,alreadi:[0,23],also:[1,2,3,5,10,11,12,13,14,15,17,19,20,21,23,25,27],alter:[10,12,13],altern:[6,10,19,21],alwai:[1,19,20,24],amount:[2,5],anaconda:21,analysi:27,ancestor:[],ani:[1,3,6,10,11,12,16,23,24],annoi:[1,3,20],anoth:[5,9,10,19,24],anyth:[2,6,14,24,25],apart:10,api:8,appear:[10,20],appli:[0,1,2,6,9,10,11,12,13,14,15,17,20,23,25],applic:[0,25],approach:[0,1,2,6,9,10,14,17,19,20,25],approx:6,approx_deriv:6,approxim:[6,12],arbitrari:[0,6,12,24],arbitrarili:24,area:10,arg:[3,11,12,16,17,20],argument:[0,2,6,10,12,20,23],around:[13,15,17,20],arrai:[5,13,14,15,23,24],arrow:0,ask:[1,11,14,23],aspect:[10,12,16,19,24],assert:[16,19],assign:[3,5,10,11,12,13,14,15,16,19,21,23],associ:5,assum:[0,1,5,6,10,20,21,24,25],astropi:21,attempt:11,attribut:20,augment:20,auto:[13,23],autodiff:[12,20],autodifferenti:[12,13,20,23,24],automat:[1,3,9,10,13,21],avail:[3,6,8,11,12,13,14,15],averag:15,avgpool2d:15,awai:16,awar:24,axes:10,b_shape:[13,14],b_storag:[13,14],b_stride:[13,14],back:[2,10,13,17,20],backend:[13,14],backpropag:23,backward:[0,1,9,12,13,15,23],bad:10,badli:10,base:[1,10,11,13,15,23],basi:[11,14],basic:[10,11,12,13,14,15,17],batch:15,becaus:[1,20],becom:[1,10,16,24],been:[5,19],befor:[0,2,3,11,13,19],begin:[0,2,6,9,10,12,13,14,15,16],behav:[5,20,23],behavior:19,behind:2,being:[20,25],below:[2,10,16],benefit:[6,16,19,27],best:[6,10,14,27],better:[10,14,19],between:[9,10,17,20,25],big:[14,16],big_index:13,big_shap:13,bigger:[13,24],billion:10,bin:[12,13,14,15,21],binari:[10,25],bit:[2,5,10,17,20,24,25],black:[3,6,20],blank:[13,14],block:[5,19],blockdim:5,blockidx:5,blockspergrid:5,blue:[10,24,27],board:27,bool:15,both:[1,6,14,20,23,24],bottom:[1,10,24],boundari:10,box:[2,6,20,23],breadth:[0,12,19],bring:23,broadcast:[9,14],broadcast_index:13,browser:27,bug:[3,14,19,20],build:[8,10,11,12,13,14,15,19],built:[12,13,14,17,23],button:21,calcul:[2,11,23],calculu:[6,9,10,23],call:[0,2,5,6,9,12,13,16,17,19,20,23,24],can:[0,1,2,3,5,6,8,9,10,11,12,13,14,16,17,19,20,21,23,24,25,27],cannot:[5,17,20,23],capit:20,captur:16,care:[2,5,10,14,17],carefulli:[12,13],cell:[15,25],central:[6,14,27],central_differ:12,certainli:19,chain:[0,20,23],chain_rul:[0,12],challeng:10,chang:[1,5,8,10,17,20,23,24],channel:15,check:[0,3,4,6,11,19,21,27],child:16,children:[],choos:21,chunk:5,classfic:11,classic:[0,15],classif:[10,11],classifi:[10,11],clean:3,cleaner:24,clearli:[10,19],clever:[14,19],click:3,clone:[5,12,13,14,15,21],close:[10,20],cls:12,code:[1,3,5,8,10,11,12,13,14,15,16,17,19,20,21,24,27],codebas:[3,8,14,17,19],colab:5,collect:[11,16,20],color:[10,11],column:24,com:[3,8,11,12,13,14,15,21,27],combin:[9,11,14],come:[1,2,5,10,23],comfort:11,command:[5,21,27],commit:3,common:[9,16,24],commonli:[5,9,10],compil:17,complet:[6,10,11,12,14,15],complex:[11,12,16],complic:[1,10,23],compon:16,comput:[0,2,5,6,8,9,10,11,12,13,14,15,20,23],concept:[8,11,15,24],conda:21,config:12,configur:21,confus:24,consid:[2,9,10,16,17,23,24],constant:[1,5,6,12],construct:[0,23,25],consult:[2,11],contain:[12,16],content:[8,20],context:[2,11,12],contigu:24,continu:[12,14,15],contribut:[8,11,12,14,15],contributor:3,control:10,conv:15,convei:3,conveni:[1,10,24],convent:0,convert:[13,17,20],coordin:10,copi:[1,13,24],core:[11,13,17,24],cornel:8,correct:[6,9,10,11,12,13,17,19,27],correctli:14,correspond:[0,6,10,12,13,14,20,23,24],cos:6,cost:[8,10],could:[1,6,9,16,17,25,27],count:[13,24],counterpart:23,coupl:10,cours:[8,21],cover:[4,10,12,19],coverag:19,cpu:[5,14],creat:[0,1,5,9,11,12,13,16,17,20,21,25],creation:20,critic:[3,5,10,16,19,20,24,27],ctx:[2,12,13,20],cube:[5,24],cuda_funct:14,cuda_matmul:14,cuda_op:14,current:[0,3,10,13,16],curri:13,curv:10,cutoff:10,d_out:[0,2,12],d_output:12,data:[5,10,11,12,16,20,24,27],datamodel:20,datapoint:[],dataset:[11,12],datastructur:[],deal:25,debug:[3,12,13,19,20],decid:10,decis:[10,17],decor:19,dedic:10,deep:[5,8,14,15,16],def:[2,3,5,6,11,12,13,16,17,19,20],defin:[10,16],definit:[2,6,17],delet:10,demand:10,demonstr:10,denot:6,depend:[2,17,21],deriv:[0,2,10,20,23],derivativ:0,descend:[11,16],descent:10,describ:[10,11,20],descript:[3,6],design:[8,11,16],detail:[3,4,10,12,13,17,24],determin:[5,10,16],devast:19,develop:[6,8,10,13,17,19,27],devic:5,dict:[11,16],dictionari:16,did:[10,13],differ:[1,2,5,6,10,20,23,24],differenti:[2,13,23],difficult:[10,17],digit:15,dii:8,dim:[13,15,24,25],dimens:[1,9,13,14,15,23,24],dimension:[13,24],direct:[10,20,21],directli:[2,5,9,14,16,19,20,21,23,24,27],directori:[3,21,27],disagre:16,disconnect:10,discuss:[1,2,6,10,20,25],displai:11,distanc:10,distribut:21,distringuish:20,divid:10,doc:[3,20,21],docstr:3,docstyl:3,document:11,doe:[1,2,14,16,17,20],doesn:[1,17,19],doing:[3,6,10,12,25],domain_calcul:15,don:[10,25],done:[8,14,16,17,20],dot:16,down:[10,24,25,27],drop:15,dropout:15,dure:[12,13],each:[0,1,2,3,5,8,10,11,12,13,15,16,17,19,20,21,23,24,25],eaiser:16,ealier:10,earlier:17,easi:[1,3,8,10,11,16,19,24],easier:[2,3,16,19],easiest:24,easili:[10,23,24],edit:21,editor:3,effect:[6,10,19],effici:[1,5,10,17,19,24,25],either:[5,21],element:[0,11,17,24],elimin:[9,25],els:11,empti:[0,1],emul:20,encount:19,end:[0,1,2,6,9,10],engin:[8,19],enjoi:8,enough:2,ensur:[1,11,13,15,17],entir:[15,21],enumer:[13,25],env:27,enviro:21,environ:[5,12,13,14,15,21,27],epoch:[13,14],epsilon:[6,12],eqnarrai:[0,2,6,9,10],equal:[11,14,23],equat:10,equival:[1,10],error:[10,21,27],etc:19,eval:[11,16],even:[1,3,5,10,14,27],ever:[0,20,23],everi:[1,2,13,19],everyon:16,everyth:[6,14,16,21,23],exactli:[1,5,9,13,14,16,20,24],exagger:5,exampl:[1,2,5,6,9,10,11,16,17,19,20,21,24,27],example_googl:3,excel:4,except:23,exercis:14,exp:[0,25],exp_trick_for_log:15,expans:23,expect:[3,19],experi:3,explain:10,explan:10,explicitli:2,explict:17,explor:10,exploratori:27,expos:20,express:[12,13],extend:24,extens:[4,5],extern:24,extra:[1,21],extract:16,f_prime:2,face:[13,24],facebookresearch:27,fact:[14,17,23],fail:[1,3,10,19],fals:15,familiar:[11,12,13,14,15],fanci:24,fantast:19,far:[1,2,10,14,24],fast:[9,14,17,24],fast_op:14,faster:[13,14,17],featur:15,feel:25,few:11,field:10,figur:27,file:[3,11,12,13,14,15],fill:13,final_variable_with_deriv:12,find:[5,10,11,13,16,23,24],fine:19,finite_differ:12,first:[0,1,2,3,8,9,10,11,12,13,14,15,16,17,19,20,21,24],fit:[3,12],fix:[3,5,23],flatten:16,flexibl:[10,20],focu:[10,20],focus:[10,11,14,24],follow:[0,1,2,3,5,6,8,9,10,11,12,13,14,15,21,24,25,27],fork:21,form:[3,5,6,10,11],format:3,formula:2,forth:[17,24],forward:[0,2,9,12,13,15,20,23],foundat:[11,13],frac:[6,11,15],framework:[10,19,23,25],free:[5,6],from:[0,6,8,9,10,11,12,13,16,17,19,20,21,23,24,25,27],full:[3,17,20],fulli:[5,10,13,15],functionbas:[12,20],fundament:[14,17,25],funni:14,further:[17,21],furthermor:17,fuse:[5,14],fusion:9,futur:11,g_x:[2,23],g_y:[2,23],gain:[10,27],gao:8,gave:14,gener:[6,10,13,17,19,20,24],geometr:24,get:[0,2,8,10,11,14,16,17,20,21,23,24],gfunction:2,git:[3,5,12,13,14,15,21],github:[3,8,11,12,13,14,15,21,27],github_path:5,give:[1,2,3,6,10,16,19,24],given:[1,2,6,9,10,13,19,20,23],global:[5,21],goal:[10,20,25],goe:[10,27],going:[0,17],good:[10,11,17],goodi:27,googl:[3,5],gpu:14,grad:23,grad_:[9,23],grad_output:13,gradient:[9,10,15,23],graph:[0,11,12,13,27],great:[6,10,17],greater:[10,11],green:10,grid:5,ground:19,group:[3,13,16,25],guard:5,guid:[10,11,12,13,14,15,21],guidanc:8,guidelin:[12,14,15],h_1:10,h_2:10,hacki:20,had:[1,2,13,23],hand:11,handi:[1,2,10],handl:13,handwritten:10,hang:5,happen:[10,17],hard:[2,5,14,15,19,20],hardwar:[5,14],has:[0,1,3,5,9,10,11,17,19,20,27],have:[0,1,2,3,5,6,10,12,13,14,15,16,17,19,20,21,23,24,25],height:15,help:[3,9,11,13,14,17,19,21,27],helper:5,here:[0,1,2,3,5,10,11,13,16,17,20,24,27],hidden:12,hide:3,high:[1,6,10,11,13],higher:[6,11,13,14,17,21,23,24,25],highest:15,highli:21,highlight:3,histori:[0,20],hold:[12,16,19,23,24],holder:16,hood:[16,17,20],hopelessli:19,hot:15,hour:19,how:[0,2,3,5,9,10,11,12,13,16,17,19,20,21,23,24],howev:[1,2,3,5,9,14,17,20,23,24],html:[3,20,21],http:[3,8,10,11,12,13,14,15,17,19,20,21,27],hundr:16,hypothesi:[11,19],idea:[19,20,23],ideal:[6,9,10,17],ident:[9,13,17],ignor:[12,15,20,21,23],imag:[11,12,15,27],imagin:[6,19],immedi:[6,9],impact:[1,21],implement:[0,2,6,8,10,11,12,13,14,15,17,20,23,24,25],impli:[1,25],implicitli:25,importantli:1,imposs:19,imprecis:20,improv:[9,17],in_shap:[13,14],in_storag:[13,14],in_strid:[13,14],includ:[2,11,16],incorrect:10,increas:24,increment:8,index1:24,index2:24,index3:24,index:[3,5,8,24],index_to_posit:13,indic:[6,10,16,25],individu:[2,3,10,23,25],industri:15,ineffici:[1,13,19],inform:[2,5,6,12,16,20],infrastructur:[10,11,15,16],initi:[0,11,16],input:[0,2,6,10,11,12,15,17,19,20],input_shap:15,input_strid:15,insid:1,instal:[5,21],instanc:[0,1,5,10,12,17,19,20,24,25,27],instead:[1,11,17,19,20],instruct:[5,21],integ:19,interact:17,intercept:10,interest:[0,1,2,5,8,11,16,19],intermedi:[0,9,27],intern:[8,10,12,16,17,20,24],interpret:1,intract:5,introduc:[11,13],introduct:10,introductori:11,intuit:[10,25,27],invers:13,issu:[1,3,9,20],its:[0,2,3,5,6,10,11,12,15,16,20,23,24],itself:[2,3,17,24],jit:5,just:[1,2,5,6,9,10,13,16,19,20,23,24,25,27],keep:[0,3,24],kei:[6,11,12,14,16,19,23,25],kept:[13,14,24],kernel:15,kernel_height:15,kernel_width:15,knob:10,know:[1,5,6,10,17,23,25],knowledg:21,known:[3,5,6,10,17,20],label:10,lagrang:6,lai:3,land:10,languag:14,larg:10,larger:13,last:[0,14,21],later:10,latest:3,launch:5,launcher:5,layer:14,lazi:25,ldot:[11,12,23],lead:[10,14],leaf:0,learn:[5,6,8,10,14,15,16,19,23],learner:8,leav:12,led:20,left:[0,1,10,13,14,24],len:17,lenet:15,length:[5,24],less:[5,11],let:[0,1,5,6,10,16,17,19,20,21,23],letter:20,level:[1,11,13,17],librari:[5,8,10,13,15,17,19,21,24,25,27],life:16,like:[0,1,2,5,10,12,13,14,15,17,19,20,24,25,27],lim_:6,limit:2,line:[1,6,10,21],linear:[10,13],linear_equ:10,linearli:10,link:[3,21],list:[3,11,12,13,17,19,27],liter:20,littl:[5,10,20],llvmlite:21,local:[2,3,5,10],localhost:27,lockstep:5,log:[0,3,13,15,25,27],logsoftmax:15,logsumexp:15,longer:23,look:[0,10,16,17,19,20,24,25,27],lookup:24,loop:[0,13,17],loss:27,lot:[5,9,23,27],low:[10,13,17],lower:[10,24],ls1:11,ls2:11,luckili:[5,9,17],machin:[6,8,10,16,19,23],machineri:23,magic:27,mai:[2,4,9,10,11,12,13,21],main:[5,10,14,16,20,23,27],maintain:[0,27],major:17,make:[1,3,5,10,11,13,14,16,17,19,20,21,24,25],manag:[16,24],mani:[1,2,3,4,5,10,13,17,19],manipul:[5,16,20,24],manner:10,map2:[11,13,14],map:[5,11,13,14,17,23,24,25],map_:[11,17],mark:[11,12,13,14,15],master:[3,5],math:[1,17,23],mathemat:[2,5,10,11,12,17,19,20,25],matmul:[9,14],matplot:27,matplotlib:27,matric:[9,23],matrix1:1,matrix:[1,9,24],matrix_multipli:14,matter:[14,19,24],maxpool2d:15,mean:[0,6,9,10,13,16,17,23,25],meant:19,mechan:5,member:16,memori:[5,9,12],mention:24,menu:5,method:[2,6,10,12,17,19,20,23,25],middl:[9,10,19],might:[2,5,10,11,19],million:16,mimic:3,mini:12,minim:[8,10],minitorch:[0,3,10,11,12,13,14,15,16,19,20,21,24],minor:20,minut:3,mismatch:1,miss:[13,14],mix:17,mkdir:21,mnist:15,mode:[11,16],model:[5,6,11,12,13,14,16,19,27],modern:10,modifi:[12,24],modul:[10,17,20,21,23,25],module1:16,module2:16,module3:16,module4:16,more:[1,2,3,4,5,9,10,11,12,13,16,20,24,25,27],most:[3,5,9,10,14,15,19,23,24],motiv:[6,10],move:[10,12,13,14,17,23,24],much:[10,17,23,24,25],mul:[9,11,12,13,20,23,25],multi:24,multidimension:[13,23],multipl:[2,9,10],multipli:[2,9,14,20],multivari:23,must:[16,17,20,23],my_func:5,mymodul:16,naiv:19,name:[0,2,3,11,12,13,16,20,23,24],named_paramet:[11,16],napoleon:3,natur:24,nearli:10,neat:[17,20],necessari:[3,10,19],need:[0,2,5,6,9,10,12,13,14,15,20,21,23,24,25,27],neg:[10,11,12,17,25],neg_map:17,negat:11,neglist:11,neighbor:25,neighborhood:5,neither:24,network:[11,12,13],neural:[11,12,15],neural_network:11,never:1,new_height:15,new_width:15,next:[0,19,23,24,25,27],nice:[3,5,19,27],njit:[14,17],node:[0,11],nois:15,non:[0,16,17,24],none:[0,13,16,17,20],normal:20,notabl:24,notat:[1,2,6,10,11,12,16,20,23,24],note:[0,1,2,5,10,17,24,25],notebook:5,noth:[14,16,27],notori:19,now:[1,2,5,10,12,13,14,15,16,17,20,23,24,25],nowadai:10,numba:[5,14],number:[1,10,12,13,19,20,24],numer:[6,10,17,20],numpi:13,nvidia:5,obei:11,object:[0,12,13,16,20,23],observ:[12,13,27],off:[0,1,13],often:[10,16,24,27],okai:13,onc:[5,10,13,20,21],one:[0,1,2,4,6,10,11,12,16,17,20,23,24,25],ones:12,ongo:9,onli:[0,1,10,11,12,14,16,20,21,23,24,25],onlin:27,open:[3,21,27],oper:[0,1,5,12,16,17,19,20,23,24],ops:[13,14],optim:[0,2,3],option:[20,21],order:[6,10,11,12,13,14,16,17,19,20,24,25],order_funct:[11,17],org:[3,10,11,12,15,17,19,20,21],organ:[3,11,16,27],orgin:0,orient:[8,19],origin:[0,3,5,10,24],other:[3,5,6,10,12,16,17,23,24,25],othermodul:16,otherwis:[0,10,15],our:[0,1,2,3,5,10,13,14,17,20,24,25,27],out2:20,out:[0,2,3,4,5,9,10,13,14,15,16,17,20,23,24,27],out_index:13,out_shap:[13,14,15],out_siz:[13,14,15],out_strid:[13,14,15],outer:17,output:[1,2,9,15,17,20,23,25,27],output_shap:15,output_strid:15,outsid:[5,11],over:[0,5,9,10,12,13,14,15,16,17,25],overhead:[13,17],overlai:10,overrid:12,overridden:12,own:[5,21],packag:21,page:[8,21],pair:[11,19,23,24,25],paradigm:16,parallel:5,param:17,paramet:[11,12,13,14,15,16],parameter1:16,parameter:10,part:[2,3,5],particular:[3,14,15],particularli:[1,9,13,19],pass:[0,1,2,3,11,12,13,14,15,17,23],past:[8,20],pasteboard:[],path:[5,16,20],peek:11,per:[8,13,14],perform:11,perhap:1,permut:[13,24],perspect:2,pick:19,pictur:25,pip:[5,21],place:[11,23,27],plai:[21,23],playground:11,pleas:[11,21],plot:[10,27],plt:27,point:[0,10,11,20,24],popular:[16,19],port:27,posit:[1,5,10,11,13,23,24,25],possibl:[5,10,20],power:24,practic:[8,11],practition:19,prang:[14,17],precis:20,predefin:19,predict:10,prefer:24,preliminari:12,pretend:1,pretti:20,previou:[5,12,20],previous:13,primer:8,print:[3,11],probabl:[6,14,15],problem:[2,9,10,13],proce:[0,8],procedur:[10,20],process:[0,1,2,3,10,11,17,19,20,25],prod:11,produc:[0,9,10,11,13,14,17,20],product:[10,11,23],program:[6,11,14,16],programm:10,progress:[3,27],project:[3,8,11,12,13,14,19],promis:20,prone:20,propag:[12,16],properti:[3,6,10,11,15,24],proprietari:5,protocol:1,prove:[6,27],provid:[2,5,6,8,11,13,14,16,19,20,24],proxi:20,psf:3,pull:[0,3,5,10,12,13,14,15],pure:[1,8],push:3,put:[0,10],pyplot:27,pytest:[3,5,21],python3:21,python:[3,5,6,8,12,13,14,16,17,19,20,21],pytorch:14,question:1,queue:0,quick:19,quickcheck:19,quickli:19,quit:[10,12,24],random:[15,19],randomli:19,rang:[10,17,19],rate:[12,15],raw:17,reach:0,read:[2,8,11,12,13,14,15,20,24],readm:[11,12,13,14],readthedoc:[3,19],real:[3,15],realli:[5,14,19,24],reassur:19,recal:[1,6],recognit:15,recommand:21,recommend:[3,5,10,11,21],record:[13,14,20],rectifi:10,rectifier_:11,recurs:16,red:[0,10],reduc:[9,10,11,13,14,17,23,25],reduce_s:[13,14],reduce_shap:[13,14],reduct:[11,13,14,15,23,25],refer:[6,10,16,20,24],reformat:3,refresh:12,region:[10,16],regular:20,reimplement:[20,25],rel:5,relu:[10,11,13],relu_back:11,rememb:[10,12,13,14,15,20],remov:[13,24],reorder:24,repeat:[10,13],repl:[21,27],replac:20,replic:1,repo:[11,12,13,14,15,21],report:[13,14],repres:[0,5,20,25],represent:6,request:[3,5],requir:[1,2,3,5,8,9,10,11,12,13,14,15,17,20,21,23],requires_grad_:13,rerun:[],research:16,reshap:[10,15],resourc:8,respect:[2,10,12,20],rest:21,restrict:5,result:[0,13,14,17],revers:15,review:[2,10,12,13,14],revisit:14,revist:13,rich:10,right:[0,8,10,24],rightarrow:6,rigid:20,robot:5,rotat:10,roughli:10,row:24,rtype:17,rule:[0,1,6,23],run:[0,2,3,5,8,12,13,17,19,21,27],run_fast_tensor:14,run_scalar:[12,13],run_tensor:[13,14],run_test:3,run_torch:11,rush:8,s_1:24,s_2:24,sai:[10,19,20,24],same:[0,1,5,9,13,14,17,19,24,25],sampl:10,sasha:8,save:[2,9,12,13],save_for_backward:2,save_valu:9,saved_valu:2,saw:13,scalar:[1,13,23,24],scalarfunct:[0,2,12,20,23],scale:5,scari:23,school:6,scope:11,score:10,script:[3,12,13,14],search:[0,8,12],second:[2,13,19,20,21],section:[0,2,10,12,13,14,15,20],see:[3,6,10,11,12,13,15,16,17,19,20,21,23,24,27],seem:[10,19],seen:[2,6,17],segment:10,select:19,self:[11,12,13,16],semi:10,send:[23,27],sens:6,separ:[10,24],sequenc:2,sequenti:0,seri:[0,3,8,11],server:[3,5,11],set:[1,3,5,6,10,11,17,19,21],sete:21,setup:[5,8,10,11,13,14,16],sever:[3,5,11,21],shape1:13,shape2:13,shape:[1,5,10,13,14,15,16,23,25],shape_broadcast:13,share:[5,16],shorter:19,should:[0,2,3,10,11,12,13,14,16,21,23],shouldn:17,show:[0,2,3,6,10,12],show_express:[12,13],shown:[10,21],side:[1,6,10,16],sigmoid:[10,11,13],sigmoid_funct:11,signup:21,silli:19,similar:[2,5,10,11,13,16,23,25],simpl:[1,2,8,10,11,12,17,20,24,25,27],simplest:[1,10,16],simpli:[0,23,25],simplic:[10,16,21,23],simplifi:14,simultan:[5,6,13],sin:6,sinc:[0,10,17,19,20,24],singl:[3,5,10,11,13,20,25],size:[1,5,9,11,13,14,15,24,25],skip:[9,11,15],slightli:5,slope:[6,10],slow:[6,13,14,17,19],small:[5,6,10,12,17],smaller:13,smooth:10,sneak:11,snippet:19,softwar:[15,19],solv:13,some:[1,5,6,8,10,11,13,14,19,23,27],someth:[10,12,17],sometim:2,somewhat:[19,23],sound:19,sourc:[3,12,13,14,15,21],space:10,span:16,special:[5,9,12,14,16,19,24],specif:[0,2,3,8,9,10,16,19],specifi:10,speed:[9,14,17,19],speedup:14,sphinxcontrib:3,spi:16,split:[10,11],spy:16,squar:[2,5,24],squint:25,srush_nlp:8,stabil:11,stabl:3,stage:10,stai:9,stand:10,standard:[1,3,14,20,24],start:[0,6,8,11,12,17,19,21,24,25,27],starter:[11,12,13,14,15],startup:17,state:[5,27],statement:[1,3],staticmethod:[2,20],step:[0,9,10,17,20,21,24],stick:23,still:20,storag:[2,13,14,15,16,24],store:[0,5,10,11,13,16,20,24],straight:10,straightforward:5,strang:10,strategi:19,strictli:8,stride:[1,13,14,15],string:[16,19,20],strive:14,strong:10,structur:[3,5,11,16,17,25],stuck:27,student_assignment1_url:12,student_assignment2_url:13,student_assignment3_url:14,student_assignment4_url:15,student_assignment_nam:21,student_assignment_url:21,studi:12,style:[2,10,11],sub:[16,20,25],sub_modul:16,subclass:[16,20],subject:11,submit:3,subscript:6,subtl:9,success:12,suggest:[11,21],suit:3,sum:[9,11,13,14,15,23,25],sum_i:15,superpow:1,supervis:10,support:[10,13],suppos:19,sure:[11,12,13,14,15,20,21],surprisingli:20,symbol:[6,20],syntax:20,system:[8,10,12,13,15,16,19,21,27],take:[1,2,3,5,10,11,14,15,17,23],talk:5,tangeant:6,tangent:6,tangibl:20,task0_1:11,task0_2:11,task1_1:12,task1_2:12,task1_3:12,task1_4:12,task2_1:13,task2_2:13,task2_3:13,task2_4:13,task3_1:14,task3_2:14,task3_3:14,task3_4:14,task4_1:15,task4_2:15,task4_3:15,task:[1,10],tasks0_3:11,tasks0_4:11,teach:8,tech:8,technic:23,techniqu:[12,17],technolog:11,tell:[0,2,5,6,10,20,21],templat:21,tensor1:[1,23],tensor2:1,tensor:[1,9,14,15,25],tensor_a:25,tensor_b:25,tensor_conv2d:15,tensor_data:13,tensor_map:[13,14],tensor_op:13,tensor_reduc:[13,14],tensor_zip:[13,14],tensordata:[13,24],tensorflow:11,tensorfunct:[13,23],term:[13,16],termin:21,terminolog:[5,11,23],test3_3:5,test:[5,6,8,12,13,14,15,16,21,27],test_add:19,test_add_bas:19,test_add_na:19,test_oper:[3,11],test_sum:3,text:10,textbook:10,than:[2,5,10,11,13,14,25],thei:[5,6,10,11,13,14,16,19,20,24,25],them:[1,5,9,10,11,12,13,14,15,16,20,21,24,27],themselv:8,therefor:[1,2,23],thi:[0,1,2,3,5,6,9,10,11,12,13,14,15,16,17,19,20,21,23,24,25,27],thing:[2,13,14,16,17,21,27],think:[5,10,16,20,23,24,25,27],third:20,those:10,though:[0,2,5,10,14,24],thread:5,threadidx:5,threadsperblock:5,three:[10,11,14,16],through:[0,5,8,10,11,13,14,21,23],throughout:[3,9,17,21,27],thu:3,tile:15,time:[0,1,2,5,6,10,12,13,14,17,20,23],timesf:[2,20],tini:5,titl:27,togeth:[5,9,10,13,16,25],ton:10,tool:[11,12,13],top:[0,1,10,12,13,24,25],torch:[8,11,13,15],total:10,touch:25,track:[3,12,23,24],tradeoff:20,trail:20,train:[6,10,11,16,19,21,27],trainer:[13,14],transform:[10,20,23,25],transpos:24,transposit:13,tree:[11,16],trick:[2,3,20,24],tricki:12,tupl:[13,24],turn:[10,13,23],tutori:[4,11,13,17,21],twice:1,two:[0,1,2,6,9,10,11,13,14,17,19,20,21,23,25],txt:[5,21],type:[3,10,11,12,13,15,16,17,20],typic:24,unari:25,under:[6,11,16,17,20],underli:[0,2,8,24],understand:[2,5,11,12,13,15],unexpect:19,unfortun:[10,19],union:13,unit:[10,19],univari:[2,6,23],unknown:6,unless:3,unlik:[19,20],unnecessari:9,until:[0,19],unwrap:20,updat:10,usag:16,use:[0,1,2,3,4,6,9,10,11,12,13,14,17,19,20,21,24,27],used:[2,5,9,10,11,13,17,19,20,21,24,25],useful:[20,24],user:[1,8,11,13,16,19,20,21,24,25],uses:10,using:[2,11,12,13,14,15,16,21,23],util:[3,5,10,11,13,14,17],val:[12,14,15],valu:[0,2,3,5,6,9,10,11,12,13,14,15,16,17,19,20,23,25],vari:[10,21],variabl:[0,2,5,12,13,16],variablewithderiv:[0,12],vector1:1,vector2:1,vector:[1,9,23,24],venv:[12,13,14,15,21],veri:[6,9,10,12,17,19,23,25],version:[1,12,15,17,21],view:[1,24,25],virtual:[12,13,14,15,21,27],vis:[11,12,27],visdom:[11,12,13,27],visual:[6,10,21],w_1:10,w_2:10,wai:[1,3,6,10,14,16,17,19,20,23,24],wait:19,walk:[11,24],want:[0,1,4,5,10,11,12,17,20,24],weight:15,weight_shap:15,weight_strid:15,welcom:8,well:[3,10,11,12,15,16,17,20,24],were:[12,20,24],what:[0,1,10,12,14,16,17,20,23,27],whatev:10,when:[1,2,5,6,10,13,16,17,19,21,24,27],whenev:21,where:[1,2,5,6,10,17,19,24,25],wherea:[20,21],which:[0,2,3,5,6,9,10,11,16,19,20,21,23,24],whichev:27,who:8,whole:[19,20],why:10,wider:10,width:[5,15],wiki:[10,11,12,15,17,19],wikipedia:[10,11,12,15,17,19],win:[14,27],window:27,wire:12,wish:8,within:[17,20,25],without:[17,23,24,25],word:3,work:[0,2,3,5,6,9,10,11,12,13,14,15,16,17,20,21,23,27],workspac:[8,11],worrisom:10,worth:9,would:[0,1,5,6,10,20,24,25],wrap:20,wrapper:24,write:[2,5,6,9,10,14,17,19,20],written:5,wrong:[10,27],x_0:11,x_1:[10,11,12,23],x_2:[10,11,23],x_3:11,x_i:[12,15],x_n:[11,12,23],xor:[11,12],year:5,yellow:10,yield:[6,10,23,24],you:[1,3,4,5,6,10,11,12,13,14,15,16,17,19,21,23,27],your:[3,5,8,11,12,13,14,15,19,21,27],z_i:15,zero:10,zip:[1,9,13,14,23,25],zipwith:[11,13,14,17]},titles:["Backpropagate","Broadcasting","Autodifferentiation","Contributing","Convolution","GPU Programming","Derivatives","Dropout","MiniTorch ","Fusing Operations","ML Primer","Module 0 - Fundamentals","Module 1 - Auto-Differentiation","Module 2 - Tensors","Module 3 - Efficiency","Module 4 - Networks","Modules","Parallel Computation","Max and Pooling","Property Testing","Tracking Variables","Workspace Setup","Softmax","Tensor Variables","Tensors","Operations","Training","Visualization"],titleterms:{"function":[11,20],IDE:21,algorithm:0,argmax:15,auto:[8,12],autodifferenti:2,autograd:13,backpropag:[0,12],backward:2,broadcast:[1,13],chain:[2,12],classifi:15,comput:17,continu:3,contribut:3,convolut:[4,15],cuda:[5,14],data:13,dataset:10,debug:11,deriv:[6,12],differenti:[8,12],document:3,dropout:7,effici:[8,14],exampl:0,fit:10,fundament:[8,11],fuse:9,get:5,gpu:5,gradient:13,index:13,indic:8,integr:3,jit:17,logo:8,loss:10,matrix:14,max:[15,18],minitorch:8,model:10,modul:[8,11,12,13,14,15,16],multipl:14,network:[8,10,15],neural:10,numba:17,numer:12,onlin:21,oper:[9,11,13,14,25],option:11,parallel:[14,17],paramet:10,pool:[15,18],primer:10,program:5,properti:19,python:11,rule:[2,12],scalar:[12,20],setup:21,shape:24,softmax:[15,22],standard:21,start:5,stride:24,style:3,sugar:20,syntact:20,tabl:8,task:[11,12,13,14,15],tensor:[8,13,23,24],test:[3,11,19],todo:[11,12,13,14,15],track:20,train:[12,13,14,15,26],variabl:[20,23],visual:[11,27],workspac:21}})