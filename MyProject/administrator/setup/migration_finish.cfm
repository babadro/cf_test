����  -� 
SourceFile NE:\cf9_u2_final\cfusion\wwwroot\CFIDE\administrator\setup\migration_finish.cfm !cfmigration_finish2ecfm1947788482  coldfusion/runtime/CFPage  <init> ()V  
  	 bindPageVariables D(Lcoldfusion/runtime/VariableScope;Lcoldfusion/runtime/LocalScope;)V   coldfusion/runtime/CfJspPage 
   OUTPUT Lcoldfusion/runtime/Variable;  bindPageVariable r(Ljava/lang/String;Lcoldfusion/runtime/VariableScope;Lcoldfusion/runtime/LocalScope;)Lcoldfusion/runtime/Variable;  
    	   ADMINOBJ   	   MIGRATEFLAG   	    FINISH_TITLE " " 	  $ com.macromedia.SourceModTime  #��,� pageContext #Lcoldfusion/runtime/NeoPageContext; ) *	  + getOut ()Ljavax/servlet/jsp/JspWriter; - . javax/servlet/jsp/PageContext 0
 1 / parent Ljavax/servlet/jsp/tagext/Tag; 3 4	  5 com.adobe.coldfusion.* 7 bindImportPath (Ljava/lang/String;)V 9 :
  ; 
 = _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V ? @
  A _setCurrentLineNo (I)V C D
  E 	component G CFIDE.adminapi.administrator I CreateObject 8(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/Object; K L
  M set (Ljava/lang/Object;)V O P coldfusion/runtime/Variable R
 S Q _get 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; U V
  W getAdminProperty Y java/lang/Object [ MigrationFlag ] _invoke K(Ljava/lang/Object;Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/Object; _ `
  a 

 c MIGRATIONSTATUS e OUTPUT.MIGRATIONSTATUS g  isDefinedCanonicalVariableAndKey D(Lcoldfusion/runtime/Variable;Ljava/lang/String;Ljava/lang/String;)Z i j
  k _Object (Z)Ljava/lang/Object; m n coldfusion/runtime/Cast p
 q o _boolean (Ljava/lang/Object;)Z s t
 q u java/lang/String w _resolveAndAutoscalarize D(Lcoldfusion/runtime/Variable;[Ljava/lang/String;)Ljava/lang/Object; y z
  { skipped } _compare '(Ljava/lang/Object;Ljava/lang/String;)D  �
  � 
	 � (class$coldfusion$tagext$lang$ImportedTag Ljava/lang/Class; "coldfusion.tagext.lang.ImportedTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � "coldfusion/tagext/lang/ImportedTag � l10n � 	../cftags � admin � setName :(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Z)V � �
 � � &coldfusion/runtime/AttributeCollection � id � finish_title1 � var � finish_title � ([Ljava/lang/Object;)V  �
 � � setAttributecollection (Ljava/util/Map;)V � �  coldfusion/tagext/lang/ModuleTag �
 � � 	hasEndTag (Z)V � � coldfusion/tagext/GenericTag �
 � � 
doStartTag ()I � �
 � � 	_pushBody _(Ljavax/servlet/jsp/tagext/BodyTag;ILjavax/servlet/jsp/JspWriter;)Ljavax/servlet/jsp/JspWriter; � �
  � Migration Complete � write � : java/io/Writer �
 � � doAfterBody � �
 � � _popBody =(ILjavax/servlet/jsp/JspWriter;)Ljavax/servlet/jsp/JspWriter; � �
  � doEndTag � � #javax/servlet/jsp/tagext/TagSupport �
 � � doCatch (Ljava/lang/Throwable;)V � �
 � � 	doFinally � 
 � � finish_title2 � Setup Complete � &class$coldfusion$tagext$lang$CustomTag  coldfusion.tagext.lang.CustomTag � � �	  �  coldfusion/tagext/lang/CustomTag � wrapper � '(Ljava/lang/String;Ljava/lang/String;)V � �
 � � panel � documentation � _arrayAssign &(Ljava/lang/Object;)Ljava/lang/Object; � �
  � title � _autoscalarize � V
  � $class$coldfusion$tagext$io$OutputTag coldfusion.tagext.io.OutputTag � � �	  � coldfusion/tagext/io/OutputTag �
 � � 
	<p class="sentance">

	 
	<b> finish_migration ,</b><p>

	<p class="sentance">
		<b>
			 maxpooledstmtDB_migration	 �Note: Value for Max Pooled Statements is set to 100 for following drivers - DB2, Informix, Oracle, Microsoft SQL Server, MySQL (DataDirect), Sybase. -
		</b>
	</p>
	
	<p class="sentance">
		 mig_uninstallCF �
			The migration wizard has successfully completed the migration of your ColdFusion
			settings. The previous version of ColdFusion has not been removed.
		 
	</p>

	 OUTPUT.EXPORT.RESTRICTEDTAGS isDefinedCanonicalName (Ljava/lang/String;)Z
  EXPORT RESTRICTEDTAGS ArrayLen (Ljava/lang/Object;)I 
 ! (I)Ljava/lang/Object; m#
 q$ /OUTPUT.EXPORT.VERITYCOLLECTIONS.K2SERVERADDRESS& VERITYCOLLECTIONS( K2SERVERADDRESS* _String &(Ljava/lang/Object;)Ljava/lang/String;,-
 q. Trim &(Ljava/lang/String;)Ljava/lang/String;01
 2 Len4 
 5 
	<p class="sentance">
		7 mig_restart9 T
			Note: You must restart ColdFusion for the following changes to take effect:
		; 

	</p>
	= 
	<ul>

	? 
		A mig_restartForSandboxC V
			<li>ColdFusion has migrated your restricted tags into a default sandbox.</li>
		E 
	</ul>

	G OUTPUT.EXPORT.VERITYCOLLECTIONSI _Map #(Ljava/lang/Object;)Ljava/util/Map;KL
 qM StructIsEmpty (Ljava/util/Map;)ZOP
 Q OUTPUT.CF6.VERITY.COLLECTIONSS CF6U VERITYW COLLECTIONSY mig_veritynote[+
			The ColdFusion Migration Wizard has created Verity collections of the same name in the default
			collection folder. These collections are empty and you will need to be re-index them. If you
			wish to have these collections in a different location use the ColdFusion Administrator to
			delete and recreate the collections in the appropriate location.
			<br />
			For more information on new Verity features, refer to the
			<a href="http://www.adobe.com/support/documentation/en/coldfusion/" target="_blank">ColdFusion documentation.</a>
		] OUTPUT.CF7.COLLECTIONEXISTS_ CF7a COLLECTIONEXISTSc (Ljava/lang/Object;D)D e
 f OUTPUT.CF8.COLLECTIONEXISTSh CF8j mig_cf7veritynotelC
		ColdFusion has migrated all collections created under the default Verity collections directory. If you created collections under another directory or are running the standalone Verity server, you must recreate the collections.<br>
		For more information about new Verity features, see the ColdFusion documentation.
		n 

	p #OUTPUT.CF7.SECURITY.SANDBOXSECURITYr SECURITYt SANDBOXSECURITYv #OUTPUT.CF8.SECURITY.SANDBOXSECURITYx mig_sandboxsecurityenabledz �
		ColdFusion sandbox security is not enabled. You must enable sandbox security in the ColdFusion Administrator. All sandboxes are migrated.
		| OUTPUT.CF7.RUNTIME.CORBA.USEORB~ OUTPUT.CF8.RUNTIME.CORBA.USEORB� mig_corba_useorb� �
		ColdFusion has migrated all CORBA connectors. To ensure that ColdFusion restarts correctly, manually add CORBA ORB to the ColdFusion classpath if it isnï¿½t already there.
		� 

	<p class="sentance">
		� mig_filesnote��
		ColdFusion has updated the corresponding settings. However, any other data files (such as databases, Custom Tags, CFX Tags and fonts) under your old webroot have not been migrated.and the corresponding settings still point to their original locations. If you have such files, make sure that you move them and update the settings before deleting your old installation directory.
		� /CFIDE� 
ExpandPath�1
 � $/gettingstarted/experience/index.cfm� concat�1
 x� 
FileExists�
 � 
		<p class="sentance">
			� mig_clickokexperience� {
				Click <a href="../gettingstarted/experience/index.cfm">ok</a> to open the ColdFusion Getting Started Experience.
			� %
		</p>
		<p class="sentance">
			� mig_clickokadmin� U
				Click <a href="index.cfm">here</a> to access the ColdFusion Administrator.
			� 
		</p>
	� mig_clickok_href� Q
				Click <a href="index.cfm">ok</a> to open the ColdFusion Administrator.
			� 
		
		<b>� finish_setup� </b><p>
		� 
			<p class="sentance">
				� }
					Click <a href="../gettingstarted/experience/index.cfm">ok</a> to open the ColdFusion Getting Started Experience.
				� (
			</p>
			<p class="sentance">
				� W
					Click <a href="index.cfm">here</a> to access the ColdFusion Administrator.
				� 
			</p>
		� mig_clickok� ;
					Click OK to open the ColdFusion Administrator.
				� REQUEST� MIGRATIONFINISHED� true� _structSetAt :(Ljava/lang/String;[Ljava/lang/Object;Ljava/lang/Object;)V��
 �
 � � coldfusion/tagext/QueryLoop�
� �
� �
 � � setAdminProperty� SetupWizardFlag� false� migrationFlag� MXMigrationFlag� 
migrateCF7� 
migrateCF8� metaData Ljava/lang/Object;��	 � this #Lcfmigration_finish2ecfm1947788482; varscope "Lcoldfusion/runtime/VariableScope; locscope Lcoldfusion/runtime/LocalScope; LocalVariableTable Code runPage ()Ljava/lang/Object; out Ljavax/servlet/jsp/JspWriter; value module0 $Lcoldfusion/tagext/lang/ImportedTag; mode0 I t6 Ljava/lang/Throwable; t7 t8 t9 t10 t11 module1 mode1 t14 t15 t16 t17 t18 t19 module20 "Lcoldfusion/tagext/lang/CustomTag; mode20 output19  Lcoldfusion/tagext/io/OutputTag; mode19 module2 mode2 t26 t27 t28 t29 t30 t31 module3 mode3 t34 t35 t36 t37 t38 t39 module4 mode4 t42 t43 t44 t45 t46 t47 module5 mode5 t50 t51 t52 t53 t54 t55 module6 mode6 t58 t59 t60 t61 t62 t63 module7 mode7 t66 t67 t68 t69 t70 t71 module8 mode8 t74 t75 t76 t77 t78 t79 module9 mode9 t82 t83 t84 t85 t86 t87 module10 mode10 t90 t91 t92 t93 t94 t95 module11 mode11 t98 t99 t100 t101 t102 t103 module12 mode12 t106 t107 t108 t109 t110 t111 module13 mode13 t114 t115 t116 t117 t118 t119 module14 mode14 t122 t123 t124 t125 t126 t127 module15 mode15 t130 t131 t132 t133 t134 t135 module16 mode16 t138 t139 t140 t141 t142 t143 module17 mode17 t146 t147 t148 t149 t150 t151 module18 mode18 t154 t155 t156 t157 t158 t159 t160 t161 t162 t163 t164 t165 t166 t167 t168 t169 LineNumberTable java/lang/Throwable� <clinit> getMetadata 1                      "     � �    � �    � �   ��       �   i     7*+,� **+,� � **+,� � **+,� � !**#+,� � %�   �        7��     7��    7��  �� �  '�  �  d*� ,� 2L*� 6N*8� <*+>� B*� *� F*HJ� N� T*� !*� F***� � XZ� \Y^S� b� T*+d� B**� fh� l� rY� v� !W**� � xYfS� |~� ��~� r� v� �*+�� B*� �-� �� �:*� F���� �� �Y� \Y�SY�SY�SY�S� �� �� �� �Y6� 5*+� �L+ö �� ˚��� � :� �:*+� �L�� �� :� #�� � #:		� ب � :
� 
�:� ۩*+>� B� �*+�� B*� �-� �� �:*
� F���� �� �Y� \Y�SY�SY�SY�S� �� �� �� �Y6� 5*+� �L+߶ �� ˚��� � :� �:*+� �L�� �� :� #�� � #:� ب � :� �:� ۩*+>� B*+d� B*� �-� �� �:*� F�� �� �Y� \Y�SY� �SY�SY**� %� �� �S� �� �� �� �Y6��*+� �L*+>� B*� �� �� �:*� F� �� Y6�+� �**� fh� l� rY� v� !W**� � xYfS� |~� ��~� r� v�C+� �*� �� �� �:*� F���� �� �Y� \Y�SYS� �� �� �� �Y6� 5*+� �L+ö �� ˚��� � :� �:*+� �L�� �� :� ,�o������ � #:� ب � :� �:� ۩+� �*� �� �� �: *� F ���� � � �Y� \Y�SY
S� �� � � � � �Y6!� 6* !+� �L+� � � ˚��� � :"� "�:#*!+� �L�# � �� :$� ,���ʨ$�� � #:% %� ب � :&� &�:' � ۩'+� �*� �� �� �:(*� F(���� �(� �Y� \Y�SYS� �� �(� �(� �Y6)� 6*()+� �L+� �(� ˚��� � :*� *�:+*)+� �L�+(� �� :,� ,�ߨ�:,�� � #:-(-� ب � :.� .�:/(� ۩/+� �*�� rY� v� (W*!� F**� � xYSYS� |�"�%Y� v� LW*'�� rY� v� :W*!� F*!� F**� � xYSY)SY+S� |�/�3�6�%� v� �+8� �*� �� �� �:0*#� F0���� �0� �Y� \Y�SY:S� �� �0� �0� �Y61� 6*01+� �L+<� �0� ˚��� � :2� 2�:3*1+� �L�30� �� :4� ,������4�� � #:505� ب � :6� 6�:70� ۩7+>� �+@� �*�� rY� v� (W**� F**� � xYSYS� |�"�%� v� �*+B� B*� �� �� �:8*+� F8���� �8� �Y� \Y�SYDS� �� �8� �8� �Y69� 6*89+� �L+F� �8� ˚��� � ::� :�:;*9+� �L�;8� �� :<� ,�p����<�� � #:=8=� ب � :>� >�:?8� ۩?*+�� B+H� �*J�� rY� v� .W*1� F***� � xYSY)S� |�N�R�� rY� v� FW*T�� rY� v� 4W*1� F***� � xYVSYXSYZS� |�N�R�� r� v� �+8� �*� �� �� �:@*3� F@���� �@� �Y� \Y�SY\S� �� �@� �@� �Y6A� 6*@A+� �L+^� �@� ˚��� � :B� B�:C*A+� �L�C@� �� :D� ,��0�hD�� � #:E@E� ب � :F� F�:G@� ۩G+>� ȧO*`�� rY� v� )W**� � xYbSYdS� |�g�~�� rY� v� ;W*i�� rY� v� )W**� � xYkSYdS� |�g�~�� r� v� �+8� �*� �� �� �:H*@� FH���� �H� �Y� \Y�SYmS� �� �H� �H� �Y6I� 6*HI+� �L+o� �H� ˚��� � :J� J�:K*I+� �L�KH� �� :L� ,�	��	�
L�� � #:MHM� ب � :N� N�:OH� ۩O+>� �*+q� B*s�� rY� v� /W**� � xYbSYuSYwS� |�g�~�� rY� v� AW*y�� rY� v� /W**� � xYkSYuSYwS� |�g�~�� r� v� �+8� �*� �	� �� �:P*J� FP���� �P� �Y� \Y�SY{S� �� �P� �P� �Y6Q� 6*PQ+� �L+}� �P� ˚��� � :R� R�:S*Q+� �L�SP� �� :T� ,�^����T�� � #:UPU� ب � :V� V�:WP� ۩W+>� �*+q� B*�� rY� v� W*��� r� v� �+8� �*� �
� �� �:X*R� FX���� �X� �Y� \Y�SY�S� �� �X� �X� �Y6Y� 6*XY+� �L+�� �X� ˚��� � :Z� Z�:[*Y+� �L�[X� �� :\� ,�d����\�� � #:]X]� ب � :^� ^�:_X� ۩_+>� �+�� �*� �� �� �:`*Y� F`���� �`� �Y� \Y�SY�S� �� �`� �`� �Y6a� 6*`a+� �L+�� �`� ˚��� � :b� b�:c*a+� �L�c`� �� :d� ,������d�� � #:e`e� ب � :f� f�:g`� ۩g+� �*^� F**^� F*����������+�� �*� �� �� �:h*`� Fh���� �h� �Y� \Y�SY�S� �� �h� �h� �Y6i� 6*hi+� �L+�� �h� ˚��� � :j� j�:k*i+� �L�kh� �� :l� ,���Ǩ�l�� � #:mhm� ب � :n� n�:oh� ۩o+�� �*� �� �� �:p*e� Fp���� �p� �Y� \Y�SY�S� �� �p� �p� �Y6q� 6*pq+� �L+�� �p� ˚��� � :r� r�:s*q+� �L�sp� �� :t� ,�ۨ��6t�� � #:upu� ب � :v� v�:wp� ۩w+�� ȧ �+�� �*� �� �� �:x*k� Fx���� �x� �Y� \Y�SY�S� �� �x� �x� �Y6y� 6*xy+� �L+�� �x� ˚��� � :z� z�:{*y+� �L�{x� �� :|� ,��+�c|�� � #:}x}� ب � :~� ~�:x� ۩+�� �*+q� B�g+�� �*� �� �� �:�*s� F����� ��� �Y� \Y�SY�S� �� ��� ��� �Y6�� 5*��+� �L+߶ ��� ˚��� � :�� ��:�*�+� �L���� �� :�� ,�.�Q����� � #:���� ب � :�� ��:��� ۩�+�� �*t� F**t� F*����������+�� �*� �� �� �:�*v� F����� ��� �Y� \Y�SY�S� �� ��� ��� �Y6�� 6*��+� �L+�� ��� ˚��� � :�� ��:�*�+� �L���� �� :�� ,�>�a����� � #:���� ب � :�� ��:��� ۩�+�� �*� �� �� �:�*{� F����� ��� �Y� \Y�SY�S� �� ��� ��� �Y6�� 6*��+� �L+�� ��� ˚��� � :�� ��:�*�+� �L���� �� :�� ,�u������� � #:���� ب � :�� ��:��� ۩�+�� ȧ �+�� �*� �� �� �:�* �� F����� ��� �Y� \Y�SY�S� �� ��� ��� �Y6�� 6*��+� �L+�� ��� ˚��� � :�� ��:�*�+� �L���� �� :�� ,� �� Ĩ ���� � #:���� ب � :�� ��:��� ۩�+�� �*+q� B*+q� B*�� xY�SĶ�*+d� B�ɚ����� :�� )� L� ���� � #:���ͨ � :�� ��:��Ω�*+>� B� ˚�x� � :�� ��:�*+� �L��� �� :�� #��� � #:��� ب � :�� ��:�� ۩�*+d� B*� * �� F*HJ� N� T* �� F***� � X�� \Y�SY�S� bW* �� F***� � X�� \Y�SY�S� bW* �� F***� � X�� \Y�SY�S� bW* �� F***� � X�� \Y�SY�S� bW* �� F***� � X�� \Y�SY�S� bW*+>� B� � �	�� �,8�258� �,G�25G�8DG�GLG�������������������a|���V�������V���������������(DG�GLG�p|�vy|�p��vy��|�����������8D�>AD��8S�>AS�DPS�SXS�Kgj�joj�@�������@���������������_{~�~�~�T�������T������������������������	
	�			��	
	%�			%�		"	%�	%	*	%�

-
0�
0
5
0�

Y
e�
_
b
e�

Y
t�
_
b
t�
e
q
t�
t
y
t�q�������f�������f���������������k�������`�������`���������������;WZ�Z_Z�0�������0���������������+GJ�JOJ� s�y|� s��y|�������������<H�BEH��<W�BEW�HTW�W\W�������������*�*�'*�*/*�������������������������	���������������������������������Zvy�y~y�O�������O���������������.JM�MRM�#v��|��#v��|���������������p��v8��>��������	
��	
Y��
_������������s��y<��B��������������v��|���������	��p	�v8	�>�	���	��	
	�	
Y	�
_�	���	���	��s	�y<	�B	��	���	���	��v	�|�	���	��	�		���/��p/�v8/�>�/���/��	
/�	
Y/�
_�/���/���/��s/�y</�B/��/���/���/��v/�|�/��,/�/4/���[��p[�v8[�>�[���[��	
[�	
Y[�
_�[���[���[��s[�y<[�B[��[���[���[��v[�|�[��O[�UX[���j��pj�v8j�>�j���j��	
j�	
Yj�
_�j���j���j��sj�y<j�Bj��j���j���j��vj�|�j��Oj�UXj�[gj�joj� �  � �  d��    d��   d��   d 3 4   d��   d��   d��   d��   d��   d�� 	  d�� 
  d��   d��   d��   d��   d��   d��   d��   d��   d �   d   d�   d   d�   d�   d�   d	�   d
�   d�   d�   d�   d�   d�    d� !  d� "  d� #  d� $  d� %  d� &  d� '  d� (  d� )  d� *  d� +  d� ,  d� -  d� .  d� /  d� 0  d � 1  d!� 2  d"� 3  d#� 4  d$� 5  d%� 6  d&� 7  d'� 8  d(� 9  d)� :  d*� ;  d+� <  d,� =  d-� >  d.� ?  d/� @  d0� A  d1� B  d2� C  d3� D  d4� E  d5� F  d6� G  d7� H  d8� I  d9� J  d:� K  d;� L  d<� M  d=� N  d>� O  d?� P  d@� Q  dA� R  dB� S  dC� T  dD� U  dE� V  dF� W  dG� X  dH� Y  dI� Z  dJ� [  dK� \  dL� ]  dM� ^  dN� _  dO� `  dP� a  dQ� b  dR� c  dS� d  dT� e  dU� f  dV� g  dW� h  dX� i  dY� j  dZ� k  d[� l  d\� m  d]� n  d^� o  d_� p  d`� q  da� r  db� s  dc� t  dd� u  de� v  df� w  dg� x  dh� y  di� z  dj� {  dk� |  dl� }  dm� ~  dn�   do� �  dp� �  dq� �  dr� �  ds� �  dt� �  du� �  dv� �  dw� �  dx� �  dy� �  dz� �  d{� �  d|� �  d}� �  d~� �  d� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� �  d�� ��  � �   $  &  #  #    8  H  7  7  .    Y  Y  ]  _  X  X  o  �  o  o  X  �  �  � � 
� 
i 
b 	 X d d q q q � � � � � � � � � � � F   � � � l !k !k !� !� !� !� !k !k !� !� !� !� !� !� !� !� !� !� !� !k !0 #� #k !� *� *� *� *� *� *� *� *D + +� *� 1� 1� 1� 1� 1� 1� 1� 1� 1� 1� 1& 1% 1% 1> 1> 1= 1= 1= 1= 1% 1% 1� 1� 3t 3	A =	@ =	@ =	R =	j =	R =	R =	@ =	@ =	� >	 >	 >	� >	� >	� >	� >	 >	 >	@ >	� @	� @	@ =� 1
� G
� G
� G
� G
� G
� G
� G
� G
� G
� H
� H
� H
� H	 H
� H
� H
� H
� H
� HV J# J
� G� P� P� P P P P� PP R R� P  Y� Y� ^� ^� ^� ^� ^� ^� ^ `� `� e� e� ky kr i� ^� sT s* t) t) t0 t) t) t" tv vC v? { { �� �� " tM q� � �� �� �� �� 6 � �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� � �� �� � �& �, � � �< �M �S �; �; �� �    �  �   E     '�� �� �� �� ��� �� �� �Y� \� ���   �       '��   �� �   "     ��   �       ��      �   #     *� 
�   �       ��         &    '