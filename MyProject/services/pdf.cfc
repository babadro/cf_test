����  -� 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc +cfpdf2ecfc2131260858$funcMERGESPECIFICPAGES  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    I " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % PDFPARAMATTRCOLL ' ITEM ) pageContext #Lcoldfusion/runtime/NeoPageContext; + ,	  - getOut ()Ljavax/servlet/jsp/JspWriter; / 0 javax/servlet/jsp/PageContext 2
 3 1 parent Ljavax/servlet/jsp/tagext/Tag; 5 6	  7 SERVICEUSERNAME 9 string ; getVariable  (I)Lcoldfusion/runtime/Variable; = > %coldfusion/runtime/ArgumentCollection @
 A ? _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; C D
  E SERVICEPASSWORD G PDFPARAM I CFIDE.services.pdfparam[] K KEEPBOOKMARK M   
         O _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V Q R
  S _setCurrentLineNo (I)V U V
  W 	ISALLOWED Y _get &(Ljava/lang/String;)Ljava/lang/Object; [ \
  ] 	isAllowed _ java/lang/Object a _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; c d
  e pdf g 
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; i j
  k ISALLOWEDIP m isAllowedIP o 

         q ArrayNew (I)Ljava/util/List; s t coldfusion/runtime/CFPage v
 w u set (Ljava/lang/Object;)V y z coldfusion/runtime/Variable |
 } { 1    � 	
        � pdfparam � 	IsDefined (Ljava/lang/String;)Z � �
 w �         
             � _List $(Ljava/lang/Object;)Ljava/util/List; � � coldfusion/runtime/Cast �
 � � java/util/List � size ()I � � � � bindPageVariable P(Ljava/lang/String;Lcoldfusion/runtime/LocalScope;)Lcoldfusion/runtime/Variable; � �
  � get (I)Ljava/lang/Object; � � � � 
                 � 	StructNew !()Lcoldfusion/util/FastHashtable; � �
 w � _arraySetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V � �
  � 
item.pages � _Object (Z)Ljava/lang/Object; � �
 � � _boolean (Ljava/lang/Object;)Z � �
 � � java/lang/String � PAGES � _resolveAndAutoscalarize D(Lcoldfusion/runtime/Variable;[Ljava/lang/String;)Ljava/lang/Object; � �
  � _compare '(Ljava/lang/Object;Ljava/lang/String;)D � �
  � _arrayGetAt C(Lcoldfusion/runtime/Variable;Ljava/lang/Object;)Ljava/lang/Object; � �
  � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � pages � StructInsert 6(Ljava/util/Map;Ljava/lang/String;Ljava/lang/Object;)Z � �
 w � item.password � PASSWORD � password � item.source � SOURCE � source � READFILEFROMURL � readFileFromURL � 2(Lcoldfusion/runtime/Variable;I)Ljava/lang/Object; c �
  � _double (Ljava/lang/Object;)D � �
 � �             
             � 
		 � DESTINATION � GETTEMPFILEPATH � getTempFilePath � .pdf � _set '(Ljava/lang/String;Ljava/lang/Object;)V � �
  � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	   _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag;
  coldfusion/tagext/lang/PDFTag cfpdf action
 merge _validateTagAttrValue \(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
  	setAction 
 destination c \
  _String &(Ljava/lang/Object;)Ljava/lang/String;
 � setDestination 
 	hasEndTag (Z)V ! coldfusion/tagext/GenericTag#
$" 
doStartTag& �
' 
            ) 
               	+ StructIsEmpty (Ljava/util/Map;)Z-.
 w/ 
	                1 (class$coldfusion$tagext$lang$PDFParamTag "coldfusion.tagext.lang.PDFParamTag43 �	 6 "coldfusion/tagext/lang/PDFParamTag8 attributecollection: _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V<=
$> _emptyTcfTag !(Ljavax/servlet/jsp/tagext/Tag;)Z@A
 B doAfterBodyD �
$E doEndTagG �
H doCatch (Ljava/lang/Throwable;)VJK
$L 	doFinallyN 
$O 
GETHTTPURLQ 
getHttpUrlS 
	U mergespecificpagesW metaData Ljava/lang/Object;YZ	 [ &coldfusion/runtime/AttributeCollection] name_ accessa remotec 
returntypee 
Parametersg TYPEi NAMEk serviceusernamem ([Ljava/lang/Object;)V o
^p servicepasswordr keepbookmarkt getReturnType ()Ljava/lang/String; this -Lcfpdf2ecfc2131260858$funcMERGESPECIFICPAGES; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; value Lcoldfusion/runtime/Variable; t17 Ljava/util/List; t18 t19 t20 t21 pdf8 Lcoldfusion/tagext/lang/PDFTag; mode8 t24 t25 t26 t27 t28 	pdfparam7 $Lcoldfusion/tagext/lang/PDFParamTag; t30 t31 t32 Ljava/lang/Throwable; t33 t34 LineNumberTable java/lang/Throwable� <clinit> 	getAccess getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �   3 �   YZ    vw {   !     <�   z       xy   |w {   "     X�   z       xy   }~ {  �  #  �-� +� � :+� !,� :	+#� &:
+(� &:+*� &:-� .� 4:-� 8:*:<� B� F:*H<� B� F:*JL� B� F:*N<� B� F:-P� T-B� X-Z� ^`-� bY-� fSY-� fSYhS� lW-C� X-n� ^p-� bY-� fSYhS� lW-r� T-E� X-� x� ~-P� T
�� ~-r� T�� ~-�� T-H� X-�� ���-�� T-� f� �:66� � 6-*+� �:��� � :� ~��-�� T-� bY-
� fS-J� X� �� �-�� T-L� X-�� �� �Y� �� W-� �Y�S� ��� ��~� �� �� /-M� X---
� f� ĸ ��-� �Y�S� �� �W-N� X-ж �� �Y� �� W-� �Y�S� ��� ��~� �� �� /-O� X---
� f� ĸ ��-� �Y�S� �� �W-P� X-ֶ �� �Y� �� W-� �Y�S� ��� ��~� �� �� I-R� X---
� f� ĸ ��-R� X-ܶ ^�-� bY-� �Y�S� �S� l� �W-
 � � �X-� T`6��R-r� T-� T-�-X� X-�� ^�-� bY�S� l� �-r� T-���:-Y� X	��	-�����%�(Y6� �-*� T-� f� �:66� � 6-*+� �:� �� � :� ~� {-,� T-[� X--� f� ȶ0�� P-2� T-�7��9:-\� X;-� f�?�%�C� :� d�-�� T-*� T`6��e-r� T�F��&�I� :� #�� � #:  �M� � :!� !�:"�P�"-�� T-`� X-R� ^T-� bY-�S� l�-V� T� �D��J��������D��J��������������� z  ` #  �xy    ��   ��Z   ���   ���   ���   ��Z   � 5 6   � �   � � 	  � "� 
  � '�   � )�   � 9�   � G�   � I�   � M�   ���   �� "   �� "   �� "   ���   ���   �� "   ���   �� "   �� "   �� "   ���   ���   ��Z   ��Z   ���    ��� !  ��Z "�  � } < �B �B �B �B �B �B �C �C �C �C �C �A �E �E �E �E �EFFFFGGGG*H)H:I:I�J�J�J�J�J�L�L�L�L�L�L�L�L�M�M�M�M�M�M�M�M�LNNN"N1N"N"NNNOKOKOZO\O\OJOJONwPvPvP�P�P�P�PvP�R�R�R�R�R�R�R�R�R�R�QvP�T�T�T�T�KI:I)H+X:X+X+X!X!XiY{Y{Y�Z�Z�[�[�[�[�[)\)\\�[fZ�ZKY�`�`�`�`�` �  {       ��� ��5� ��7�^Y� bY`SYXSYbSYdSYfSY<SYhSY� bY�^Y� bYjSY<SYlSYnS�qSY�^Y� bYjSY<SYlSYsS�qSY�^Y� bYjSYLSYlSY�S�qSY�^Y� bYjSY<SYlSYuS�qSS�q�\�   z       �xy   � � {         �   z       xy   �� {   7     � �Y:SYHSYJSYNS�   z       xy   �� {   "     �\�   z       xy      {   #     *� 
�   z       xy        ����  -X 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc  cfpdf2ecfc2131260858$funcSETINFO  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    KVPAIR " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % 
ATTRIBUTES ' pageContext #Lcoldfusion/runtime/NeoPageContext; ) *	  + getOut ()Ljavax/servlet/jsp/JspWriter; - . javax/servlet/jsp/PageContext 0
 1 / parent Ljavax/servlet/jsp/tagext/Tag; 3 4	  5 SERVICEUSERNAME 7 string 9 getVariable  (I)Lcoldfusion/runtime/Variable; ; < %coldfusion/runtime/ArgumentCollection >
 ? = _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; A B
  C SERVICEPASSWORD E SOURCE G INFO I CFIDE.services.element[] K PASSWORD M         
		 O _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V Q R
  S _setCurrentLineNo (I)V U V
  W 	ISALLOWED Y _get &(Ljava/lang/String;)Ljava/lang/Object; [ \
  ] 	isAllowed _ java/lang/Object a _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; c d
  e pdf g 
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; i j
  k ISALLOWEDIP m isAllowedIP o 
SOURCEPATH q READFILEFROMURL s readFileFromURL u _set '(Ljava/lang/String;Ljava/lang/Object;)V w x
  y DESTINATION { GETTEMPFILEPATH } getTempFilePath  c \
  � 
INFOSTRUCT � 	StructNew !()Lcoldfusion/util/FastHashtable; � � coldfusion/runtime/CFPage �
 � � 
	 �   � set (Ljava/lang/Object;)V � � coldfusion/runtime/Variable �
 � � 

         � _List $(Ljava/lang/Object;)Ljava/util/List; � � coldfusion/runtime/Cast �
 � � java/util/List � size ()I � � � � bindPageVariable P(Ljava/lang/String;Lcoldfusion/runtime/LocalScope;)Lcoldfusion/runtime/Variable; � �
  � get (I)Ljava/lang/Object; � � � � 
            � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � java/lang/String � KEY � _resolveAndAutoscalarize D(Lcoldfusion/runtime/Variable;[Ljava/lang/String;)Ljava/lang/Object; � �
  � _String &(Ljava/lang/Object;)Ljava/lang/String; � �
 � � VALUE � StructInsert 6(Ljava/util/Map;Ljava/lang/String;Ljava/lang/Object;)Z � �
 � � 
		 � 			
         � ACTION � setinfo � _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V � �
  � ALLOWEXTRAATTRIBUTES � true � password � 	IsDefined (Ljava/lang/String;)Z � �
 � � _Object (Z)Ljava/lang/Object; � �
 � � _boolean (Ljava/lang/Object;)Z � �
 � � _compare '(Ljava/lang/Object;Ljava/lang/String;)D � �
  � StructDelete $(Ljava/util/Map;Ljava/lang/String;)Z � �
 � � 			
		 � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � coldfusion/tagext/lang/PDFTag � attributecollection � _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V �  coldfusion/tagext/GenericTag
 	hasEndTag (Z)V
 _emptyTcfTag !(Ljavax/servlet/jsp/tagext/Tag;)Z	

   
		 
GETHTTPURL 
getHttpUrl 			
	 metaData Ljava/lang/Object;	  &coldfusion/runtime/AttributeCollection name access remote 
returntype! 
Parameters# TYPE% NAME' serviceusername) ([Ljava/lang/Object;)V +
, servicepassword. source0 info2 getReturnType ()Ljava/lang/String; this "Lcfpdf2ecfc2131260858$funcSETINFO; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; value Lcoldfusion/runtime/Variable; t17 Ljava/util/List; t18 I t19 t20 t21 pdf12 Lcoldfusion/tagext/lang/PDFTag; LineNumberTable <clinit> 	getAccess getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �       45 9   !     :�   8       67   :5 9   !     ʰ   8       67   ;< 9  } 
   #-� +� � :+� !,� :	+#� &:
+(� &:-� ,� 2:-� 6:*8:� @� D:*F:� @� D:*H:� @� D:*JL� @� D:*N:� @� D:-P� T-Ͷ X-Z� ^`-� bY-� fSY-� fSYhS� lW-ζ X-n� ^p-� bY-� fSYhS� lW-r-϶ X-t� ^v-� bY-� fS� l� z-|-ж X-~� ^�-� bY-r� �S� l� z-�-Ѷ X� �� z-�� T
�� �-�� T-� f� �:66� � 6-#+� �:� h� � :� �� I-�� T-ն X--�� �� �-
� �Y�S� �� �-
� �Y�S� �� �W-Ķ T`6���-ƶ T-� f� �-� �Y�Sʶ �-� �YHS-r� �� �-� �Y|S-|� �� �-� �YJS-�� �� �-� �Y�SҶ �-߶ X-Զ ��� �Y� �� W-� f�� ��~�� ܸ �� -� X--� f� �Զ �W-� T-� �� �� �:-� X�-� f���� �-� T-� X-� ^-� bY-|� �S� l�-� T�   8   �   #67    #=>   #?   #@A   #BC   #DE   #F   # 3 4   # G   # G 	  # "G 
  # 'G   # 7G   # EG   # GG   # IG   # MG   #HI   #JK   #LK   #MK   #NG   #OP Q  Z V � �� �� �� �� �� �� �� �� �� �� �� ��� �� �� ���+����B�B�8� ��P�R�R�P�_�_���������������������_����������!�!��6�6�*�K�K�?�`�`�T�m�l�l�l�l������l�����������l������������������ R  9      � �� ��Y� bYSY�SYSY SY"SY:SY$SY� bY�Y� bY&SY:SY(SY*S�-SY�Y� bY&SY:SY(SY/S�-SY�Y� bY&SY:SY(SY1S�-SY�Y� bY&SYLSY(SY3S�-SY�Y� bY&SY:SY(SY�S�-SS�-��   8      67   S � 9         �   8       67   TU 9   <     � �Y8SYFSYHSYJSYNS�   8       67   VW 9   "     ��   8       67      9   #     *� 
�   8       67        ����  -� 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc "cfpdf2ecfc2131260858$funcTHUMBNAIL  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    I " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % HTTPURLFORDIRECTORY ' 
ATTRIBUTES ) ARRAY + FILENAME - pageContext #Lcoldfusion/runtime/NeoPageContext; / 0	  1 getOut ()Ljavax/servlet/jsp/JspWriter; 3 4 javax/servlet/jsp/PageContext 6
 7 5 parent Ljavax/servlet/jsp/tagext/Tag; 9 :	  ; SERVICEUSERNAME = string ? getVariable  (I)Lcoldfusion/runtime/Variable; A B %coldfusion/runtime/ArgumentCollection D
 E C _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; G H
  I SERVICEPASSWORD K SOURCE M FORMAT O IMAGEPREFIX Q PASSWORD S PAGES U 
RESOLUTION W SCALE Y TRANSPARENT [ ,                                        
		 ] _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V _ `
  a _setCurrentLineNo (I)V c d
  e 	ISALLOWED g _get &(Ljava/lang/String;)Ljava/lang/Object; i j
  k 	isAllowed m java/lang/Object o _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; q r
  s pdf u 
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; w x
  y ISALLOWEDIP { isAllowedIP } 
SOURCEPATH  READFILEFROMURL � readFileFromURL � _set '(Ljava/lang/String;Ljava/lang/Object;)V � �
  � DESTINATION � GETTEMPFILEPATH � getTempFilePath � 	thumbnail � set (Ljava/lang/Object;)V � � coldfusion/runtime/Variable �
 � � java/lang/String � ACTION � _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V � �
  � q j
  � ALLOWEXTRAATTRIBUTES � true � format � 	IsDefined (Ljava/lang/String;)Z � � coldfusion/runtime/CFPage �
 � � _Object (Z)Ljava/lang/Object; � � coldfusion/runtime/Cast �
 � � _boolean (Ljava/lang/Object;)Z � �
 � �   � _compare '(Ljava/lang/Object;Ljava/lang/String;)D � �
  � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � StructDelete $(Ljava/util/Map;Ljava/lang/String;)Z � �
 � � imageprefix � pages � password � 
resolution � scale � transparent � 			
		 � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � coldfusion/tagext/lang/PDFTag � attributecollection � _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V � � coldfusion/tagext/GenericTag �
 � � 	hasEndTag (Z)V � �
 � � 
doStartTag ()I � �
 � � doAfterBody � �
 � � doEndTag � �
 � � doCatch (Ljava/lang/Throwable;)V � �
 � � 	doFinally � 
 �  
 
	       UTIL java coldfusion.servicelayer.Utils CreateObject 8(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/Object;

 � 	FILESLIST sortThumnailFiles _invoke K(Ljava/lang/Object;Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/Object;
  

	       ArrayNew (I)Ljava/util/List;
 � 	
	       1 
GETHTTPURL  
getHttpUrl" _List $(Ljava/lang/Object;)Ljava/util/List;$%
 �& java/util/List( size* �)+ bindPageVariable P(Ljava/lang/String;Lcoldfusion/runtime/LocalScope;)Lcoldfusion/runtime/Variable;-.
 / get (I)Ljava/lang/Object;12)3 
		5 MAP7 	component9 CFIDE.services.element; KEY= :(Ljava/lang/String;[Ljava/lang/Object;Ljava/lang/Object;)V �?
 @ VALUEB _String &(Ljava/lang/Object;)Ljava/lang/String;DE
 �F /H concat &(Ljava/lang/String;)Ljava/lang/String;JK
 �L 2(Lcoldfusion/runtime/Variable;I)Ljava/lang/Object; qN
 O _double (Ljava/lang/Object;)DQR
 �S (D)Ljava/lang/Object; �U
 �V _arraySetAtX �
 Y 			
	[ metaData Ljava/lang/Object;]^	 _ CFIDE.services.element[]a &coldfusion/runtime/AttributeCollectionc namee accessg remotei 
returntypek 
Parametersm TYPEo NAMEq serviceusernames ([Ljava/lang/Object;)V u
dv servicepasswordx sourcez getReturnType ()Ljava/lang/String; this $Lcfpdf2ecfc2131260858$funcTHUMBNAIL; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; value Lcoldfusion/runtime/Variable; pdf13 Lcoldfusion/tagext/lang/PDFTag; mode13 t27 t28 Ljava/lang/Throwable; t29 t30 t31 Ljava/util/List; t32 t33 t34 t35 LineNumberTable java/lang/Throwable� <clinit> 	getAccess getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �   ]^    |} �   "     b�   �       ~   �} �   !     ��   �       ~   �� �  s 
 $  W-� +� � :+� !,� :	+#� &:
+(� &:+*� &:+,� &:+.� &:-� 2� 8:-� <:*>@� F� J:*L@� F� J:*N@� F� J:*P@� F� J:*R@� F� J:*T@� F� J:*V@� F� J:*X@� F� J:*Z@� F� J:*\@	� F� J:-^� b-� f-h� ln-� pY-� tSY-� tSYvS� zW-� f-|� l~-� pY-� tSYvS� zW-�-�� f-�� l�-� pY-� tS� z� �-�-�� f-�� l�-� pY�S� z� �-� t� �-� �Y�S�� �-� �YNS-�� �� �-� �Y�S-�� �� �-� �Y�S�� �-�� f-�� ��� �Y� �� W-� t�� ��~�� �� �� -�� f--� t� ��� �W-�� f-ƶ ��� �Y� �� W-� t�� ��~�� �� �� - � f--� t� �ƶ �W-� f-ȶ ��� �Y� �� W-� t�� ��~�� �� �� -� f--� t� �ȶ �W-� f-ʶ ��� �Y� �� W-� t�� ��~�� �� �� -� f--� t� �ʶ �W-� f-̶ ��� �Y� �� W-� t�� ��~�� �� �� -� f--� t� �̶ �W-� f-ζ ��� �Y� �� W-� t�� ��~�� �� �� -� f--� t� �ζ �W-	� f-ж ��� �Y� �� W-� t�� ��~�� �� �� -
� f--� t� �ж �W-Ҷ b-� �� �� �:-� f�-� t� �� �� �Y6� � ����� �� :� #�� � #:� �� � :� �:��-� b--� f-	�� �--� f--� l� pY-�� �S�� �-� b-� f-�� �-� b
� �-� b�� �-� b-� f-!� l#-� pY-�� �S� z� �-� b-� ��':6 6!�, 6"-.+�0:#� �!�4 :#� �� �-6� b-8-� f-:<�� �-6� b-8� �Y>S-
� t�A-6� b-8� �YCS-� t�GI�M-� t�G�M�A-6� b-� pY-
 �P�T�WS-8� ��Z-� b! `6!!"��2-� b-� t�-\� b� ;Zf�`cf�;Zu�`cu�fru�uzu� �  j $  W~    W��   W�^   W��   W��   W��   W�^   W 9 :   W �   W � 	  W "� 
  W '�   W )�   W +�   W -�   W =�   W K�   W M�   W O�   W Q�   W S�   W U�   W W�   W Y�   W [�   W��   W� "   W�^   W��   W��   W�^   W��   W� "    W� " !  W� " "  W�� #�  j � ���'�0���>�M�V�>�>�g�v�g�g�]���������������������������������������������������8�8�A�7�7��O�N�N�N�N�a�g�a�a�N�� � � � � N���������������������������"�0////BHBB/ddmcc/{zzzz����z�����z�	�	�	�	�	�	�	�	�	�	�
�

�
�
�	�++��������������������.DD���������������������9DEEE �  �  �    �ָ ܳ ޻dY� pYfSY�SYhSYjSYlSYbSYnSY
� pY�dY� pYpSY@SYrSYtS�wSY�dY� pYpSY@SYrSYyS�wSY�dY� pYpSY@SYrSY{S�wSY�dY� pYpSY@SYrSY�S�wSY�dY� pYpSY@SYrSY�S�wSY�dY� pYpSY@SYrSY�S�wSY�dY� pYpSY@SYrSY�S�wSY�dY� pYpSY@SYrSY�S�wSY�dY� pYpSY@SYrSY�S�wSY	�dY� pYpSY@SYrSY�S�wSS�w�`�   �      �~   � � �         �   �       ~   �� �   Z     <
� �Y>SYLSYNSYPSYRSYTSYVSYXSYZSY	\S�   �       <~   �� �   "     �`�   �       ~      �   #     *� 
�   �       ~        ����  - 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc (cfpdf2ecfc2131260858$funcREMOVEWATERMARK  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    
ATTRIBUTES " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % pageContext #Lcoldfusion/runtime/NeoPageContext; ' (	  ) getOut ()Ljavax/servlet/jsp/JspWriter; + , javax/servlet/jsp/PageContext .
 / - parent Ljavax/servlet/jsp/tagext/Tag; 1 2	  3 SERVICEUSERNAME 5 string 7 getVariable  (I)Lcoldfusion/runtime/Variable; 9 : %coldfusion/runtime/ArgumentCollection <
 = ; _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; ? @
  A SERVICEPASSWORD C SOURCE E PAGES G PASSWORD I         
		 K _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V M N
  O _setCurrentLineNo (I)V Q R
  S 	ISALLOWED U _get &(Ljava/lang/String;)Ljava/lang/Object; W X
  Y 	isAllowed [ java/lang/Object ] _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; _ `
  a pdf c 
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; e f
  g ISALLOWEDIP i isAllowedIP k 
SOURCEPATH m READFILEFROMURL o readFileFromURL q _set '(Ljava/lang/String;Ljava/lang/Object;)V s t
  u DESTINATION w GETTEMPFILEPATH y getTempFilePath { _ X
  } set (Ljava/lang/Object;)V  � coldfusion/runtime/Variable �
 � � java/lang/String � ACTION � removewatermark � _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V � �
  � ALLOWEXTRAATTRIBUTES � true � pages � 	IsDefined (Ljava/lang/String;)Z � � coldfusion/runtime/CFPage �
 � � _Object (Z)Ljava/lang/Object; � � coldfusion/runtime/Cast �
 � � _boolean (Ljava/lang/Object;)Z � �
 � �   � _compare '(Ljava/lang/Object;Ljava/lang/String;)D � �
  � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � StructDelete $(Ljava/util/Map;Ljava/lang/String;)Z � �
 � � password � 			
		 � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � coldfusion/tagext/lang/PDFTag � attributecollection � _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V � � coldfusion/tagext/GenericTag �
 � � 	hasEndTag (Z)V � �
 � � _emptyTcfTag !(Ljavax/servlet/jsp/tagext/Tag;)Z � �
  �  
		 � 
GETHTTPURL � 
getHttpUrl � 			
	 � metaData Ljava/lang/Object; � �	  � &coldfusion/runtime/AttributeCollection � name � access � remote � 
returntype � 
Parameters � TYPE � NAME � serviceusername � ([Ljava/lang/Object;)V  �
 � � servicepassword � source � getReturnType ()Ljava/lang/String; this *Lcfpdf2ecfc2131260858$funcREMOVEWATERMARK; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; value Lcoldfusion/runtime/Variable; pdf11 Lcoldfusion/tagext/lang/PDFTag; LineNumberTable <clinit> 	getAccess ()I getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �    � �     � �    !     8�               �    !     ��                 � 
   �-� +� � :+� !,� :	+#� &:
-� *� 0:-� 4:*68� >� B:*D8� >� B:*F8� >� B:*H8� >� B:*J8� >� B:-L� P-�� T-V� Z\-� ^Y-� bSY-� bSYdS� hW-�� T-j� Zl-� ^Y-� bSYdS� hW-n-�� T-p� Zr-� ^Y-� bS� h� v-x-�� T-z� Z|-� ^Y-n� ~S� h� v
-� b� �-
� �Y�S�� �-
� �YFS-n� ~� �-
� �YxS-x� ~� �-
� �Y�S�� �-�� T-�� ��� �Y� �� W-� b�� ��~�� �� �� -�� T--
� b� ��� �W-�� T-�� ��� �Y� �� W-� b�� ��~�� �� �� -�� T--
� b� ��� �W-�� P-� �� �� �:-¶ T�-
� b� �� �� ؙ �-ڶ P-ö T-ܶ Z�-� ^Y-x� ~S� h�-� P�      �   �     �   �	 �   �
   �   �   � �   � 1 2   �    �  	  � " 
  � 5   � C   � E   � G   � I   �   : N � �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� ���#���
�0�2�2�G�G�;�X�X�L�m�m�a�����v������������������������������������������������������������ ��?�?�%�h�w�h�h�h�          ��� �� » �Y� ^Y�SY�SY�SY�SY�SY8SY�SY� ^Y� �Y� ^Y�SY8SY�SY�S� �SY� �Y� ^Y�SY8SY�SY�S� �SY� �Y� ^Y�SY8SY�SY�S� �SY� �Y� ^Y�SY8SY�SY�S� �SY� �Y� ^Y�SY8SY�SY�S� �SS� �� �          �              �                  <     � �Y6SYDSYFSYHSYJS�                  "     � �                    #     *� 
�                   ����  -r 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc  cfpdf2ecfc2131260858$funcGETINFO  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    
ATTRIBUTES " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % 
SOURCEPATH ' pageContext #Lcoldfusion/runtime/NeoPageContext; ) *	  + getOut ()Ljavax/servlet/jsp/JspWriter; - . javax/servlet/jsp/PageContext 0
 1 / parent Ljavax/servlet/jsp/tagext/Tag; 3 4	  5 SERVICEUSERNAME 7 string 9 getVariable  (I)Lcoldfusion/runtime/Variable; ; < %coldfusion/runtime/ArgumentCollection >
 ? = _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; A B
  C SERVICEPASSWORD E SOURCE G PASSWORD I 
		 K _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V M N
  O _setCurrentLineNo (I)V Q R
  S 	ISALLOWED U _get &(Ljava/lang/String;)Ljava/lang/Object; W X
  Y 	isAllowed [ java/lang/Object ] _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; _ `
  a pdf c 
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; e f
  g ISALLOWEDIP i isAllowedIP k READFILEFROMURL m readFileFromURL o set (Ljava/lang/Object;)V q r coldfusion/runtime/Variable t
 u s java/lang/String w ACTION y getinfo { _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V } ~
   NAME � info � ALLOWEXTRAATTRIBUTES � true � password � 	IsDefined (Ljava/lang/String;)Z � � coldfusion/runtime/CFPage �
 � � _Object (Z)Ljava/lang/Object; � � coldfusion/runtime/Cast �
 � � _boolean (Ljava/lang/Object;)Z � �
 � �   � _compare '(Ljava/lang/Object;Ljava/lang/String;)D � �
  � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � StructDelete $(Ljava/util/Map;Ljava/lang/String;)Z � �
 � � 			
		 � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � coldfusion/tagext/lang/PDFTag � attributecollection � _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V � � coldfusion/tagext/GenericTag �
 � � 	hasEndTag (Z)V � �
 � � _emptyTcfTag !(Ljavax/servlet/jsp/tagext/Tag;)Z � �
  �  
        	 � PDFINFO � 	component � CFIDE.services.pdfinfo � CreateObject 8(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/Object; � �
 � � _set '(Ljava/lang/String;Ljava/lang/Object;)V � �
  � APPLICATION � INFO � _resolveAndAutoscalarize 9(Ljava/lang/String;[Ljava/lang/String;)Ljava/lang/Object; � �
  � :(Ljava/lang/String;[Ljava/lang/Object;Ljava/lang/Object;)V } �
  � AUTHOR � CENTERWINDOWONSCREEN � CHANGINGDOCUMENT � 
COMMENTING � CONTENTEXTRACTION � COPYCONTENT � CREATED � DOCUMENTASSEMBLY � 
ENCRYPTION � FILEPATH � FILLINGFORM � FITTOWINDOW � HIDEMENUBAR  HIDETOOLBAR HIDEWINDOWUI KEYWORDS LANGUAGE MODIFIED
 
PAGELAYOUT PRINTING PRODUCER 
PROPERTIES _factor0 j(Ljavax/servlet/jsp/tagext/Tag;Ljavax/servlet/jsp/JspWriter;Lcoldfusion/runtime/CFPage;)Ljava/lang/Object;
  SECURE SHOWDOCUMENTSOPTION SHOWWINDOWSOPTION SIGNING SUBJECT  TITLE" 
TOTALPAGES$ TRAPPED& VERSION( 	PAGESIZES* (CONVERTARRAYOFSTRUCTTOPDFPAGEDETAILARRAY, (convertArrayOfStructToPDFPageDetailArray. PAGEROTATIONS0 
        
               	2 _ X
 4 			
	6 metaData Ljava/lang/Object;89	 : &coldfusion/runtime/AttributeCollection< name> access@ remoteB 
returntypeD 
ParametersF TYPEH serviceusernameJ ([Ljava/lang/Object;)V L
=M servicepasswordO sourceQ getReturnType ()Ljava/lang/String; this "Lcfpdf2ecfc2131260858$funcGETINFO; LocalVariableTable Code getName __factorParent out Ljavax/servlet/jsp/JspWriter; 
parentPage Lcoldfusion/runtime/CFPage; value LineNumberTable runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance __arguments 'Lcoldfusion/runtime/ArgumentCollection; Lcoldfusion/runtime/Variable; pdf2 Lcoldfusion/tagext/lang/PDFTag; <clinit> 	getAccess ()I getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �   89   	 ST X   !     ԰   W       UV   YT X   !     |�   W       UV    X  R 	   �-�-h� T-�Զ ض �-�� xY�S-�� xY�S� � �-�� xY�S-�� xY�S� � �-�� xY�S-�� xY�S� � �-�� xY�S-�� xY�S� � �-�� xY�S-�� xY�S� � �-�� xY�S-�� xY�S� � �-�� xY�S-�� xY�S� � �-�� xY�S-�� xY�S� � �-�� xY�S-�� xY�S� � �-�� xY�S-�� xY�S� � �-�� xY�S-�� xY�S� � �-�� xY�S-�� xY�S� � �-�� xY�S-�� xY�S� � �-�� xYS-�� xYS� � �-�� xYS-�� xYS� � �-�� xYS-�� xYS� � �-�� xYS-�� xYS� � �-�� xY	S-�� xY	S� � �-�� xYS-�� xYS� � �-�� xYS-�� xYS� � �-�� xYS-�� xYS� � �-�� xYS-�� xYS� � �-�� xYS-�� xYS� � �-�   W   4   �UV    �Z 4   �[\   �]^   �_9 `  * J 
 h  h 	 h 	 h   h   i   i  i > j > j 2 j \ k \ k P k z l z l n l � m � m � m � n � n � n � o � o � o � p � p � p q q q. r. r" rL sL s@ sj tj t^ t� u� u| u� v� v� v� w� w� w� x� x� x y y� y' z' z zG {G {: {g |g |Z |� }� }z }� ~� ~� ~� � �  ab X  �    u-� +� � :+� !,� :	+#� &:
+(� &:-� ,� 2:-� 6:*8:� @� D:*F:� @� D:*H:� @� D:*J:� @� D:-L� P-Y� T-V� Z\-� ^Y-� bSY-� bSYdS� hW-Z� T-j� Zl-� ^Y-� bSYdS� hW-[� T-n� Zp-� ^Y-� bS� h� v
-� b� v-
� xYzS|� �-
� xYHS-� b� �-
� xY�S�� �-
� xY�S�� �-c� T-�� ��� �Y� �� W-� b�� ��~�� �� �� -d� T--
� b� ��� �W-�� P-� �� �� �:-f� T�-
� b� �� �� ̙ �-ζ P*-�� �-�� xYS-�� xYS� � �-�� xYS-�� xYS� � �-�� xYS-�� xYS� � �-�� xYS-�� xYS� � �-�� xY!S-�� xY!S� � �-�� xY#S-�� xY#S� � �-�� xY%S-�� xY%S� � �-�� xY'S-�� xY'S� � �-�� xY)S-�� xY)S� � �-�� xY+S- �� T--� Z/-� ^Y-�� xY+S� �SY-�� xY1S� �S� h� �-3� P-ж5�-7� P�   W   �   uUV    ucd   ue9   u]^   ufg   u[\   u_9   u 3 4   u h   u h 	  u "h 
  u 'h   u 7h   u Eh   u Gh   u Ih   uij `  f Y  S � Y � Y � Y � Y � Y � Y � Z � Z � Z � Z � Z � [ � [ � [ � [ � [ � ] � ] � ] ^ ^ ^% _% _ _: `: `. `K aK a? aW cV cV cV cV ci co ci ci cV c� d� d� d� d� dV c � X� f� f� f� �� �� � � � �8 �8 �+ �X �X �K �x �x �k �� �� �� �� �� �� �� �� �� �� �� �� � �0 �C � � � �� gc �c �c � k  X   �     ��� �� ��=Y� ^Y?SY|SYASYCSYESY�SYGSY� ^Y�=Y� ^YISY:SY�SYKS�NSY�=Y� ^YISY:SY�SYPS�NSY�=Y� ^YISY:SY�SYRS�NSY�=Y� ^YISY:SY�SY�S�NSS�N�;�   W       �UV   lm X         �   W       UV   no X   7     � xY8SYFSYHSYJS�   W       UV   pq X   "     �;�   W       UV      X   #     *� 
�   W       UV        ����  - � 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc cfpdf2ecfc2131260858  coldfusion/runtime/CFComponent  <init> ()V  
  	 com.macromedia.SourceModTime  %h�[ coldfusion/runtime/CfJspPage  pageContext #Lcoldfusion/runtime/NeoPageContext;  	   getOut ()Ljavax/servlet/jsp/JspWriter;   javax/servlet/jsp/PageContext 
   parent Ljavax/servlet/jsp/tagext/Tag;  	   com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   !
  " 
	 $ _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V & '
  ( 

	 * 	
    
	 , 	


    .    
    
	 0    

	 2 _factor1 O(Ljavax/servlet/jsp/tagext/Tag;Ljavax/servlet/jsp/JspWriter;)Ljava/lang/Object; 4 5
  6      
	    
	 8    
    
 	 :       
             
	 <      
    
	 >   
    
	 @               
 B setinfo Lcoldfusion/runtime/UDFMethod;  cfpdf2ecfc2131260858$funcSETINFO F
 G 	 D E	  I SETINFO K registerUDF 3(Ljava/lang/String;Lcoldfusion/runtime/UDFMethod;)V M N
  O 
processDDX #cfpdf2ecfc2131260858$funcPROCESSDDX R
 S 	 Q E	  U 
PROCESSDDX W 
mergeFiles #cfpdf2ecfc2131260858$funcMERGEFILES Z
 [ 	 Y E	  ] 
MERGEFILES _ 	thumbnail "cfpdf2ecfc2131260858$funcTHUMBNAIL b
 c 	 a E	  e 	THUMBNAIL g addwatermark %cfpdf2ecfc2131260858$funcADDWATERMARK j
 k 	 i E	  m ADDWATERMARK o extractPages %cfpdf2ecfc2131260858$funcEXTRACTPAGES r
 s 	 q E	  u EXTRACTPAGES w extractImage %cfpdf2ecfc2131260858$funcEXTRACTIMAGE z
 { 	 y E	  } EXTRACTIMAGE  getinfo  cfpdf2ecfc2131260858$funcGETINFO �
 � 	 � E	  � GETINFO � mergespecificpages +cfpdf2ecfc2131260858$funcMERGESPECIFICPAGES �
 � 	 � E	  � MERGESPECIFICPAGES � deletepages $cfpdf2ecfc2131260858$funcDELETEPAGES �
 � 	 � E	  � DELETEPAGES � removewatermark (cfpdf2ecfc2131260858$funcREMOVEWATERMARK �
 � 	 � E	  � REMOVEWATERMARK � protect  cfpdf2ecfc2131260858$funcPROTECT �
 � 	 � E	  � PROTECT � extractText $cfpdf2ecfc2131260858$funcEXTRACTTEXT �
 � 	 � E	  � EXTRACTTEXT � (convertArrayOfStructToPDFPageDetailArray Acfpdf2ecfc2131260858$funcCONVERTARRAYOFSTRUCTTOPDFPAGEDETAILARRAY �
 � 	 � E	  � (CONVERTARRAYOFSTRUCTTOPDFPAGEDETAILARRAY � metaData Ljava/lang/Object; � �	  � &coldfusion/runtime/AttributeCollection � _implicitMethods Ljava/util/Map; � �	  � java/lang/Object � style � document � extends � base � Name � pdf � 	Functions �	 G �	 S �	 [ �	 c �	 k �	 s �	 { �	 � �	 � �	 � �	 � �	 � �	 � �	 � � ([Ljava/lang/Object;)V  �
 � � runPage ()Ljava/lang/Object; this Lcfpdf2ecfc2131260858; out Ljavax/servlet/jsp/JspWriter; value LocalVariableTable LineNumberTable Code _getImplicitMethods ()Ljava/util/Map; _setImplicitMethods (Ljava/util/Map;)V implicitMethods <clinit> 
getExtends ()Ljava/lang/String; getMetadata registerUDFs __factorParent 1       D E    Q E    Y E    a E    i E    q E    y E    � E    � E    � E    � E    � E    � E    � E    � �   
 � �   	  � �  �   �     R*� � L*� N*� #*-+� 7� �*+9� )*+;� )*+1� )*+=� )*+?� )*+A� )*+C� )�    �   *    R � �     R � �    R � �    R    �         � �  �   "     � °    �        � �    � �  �   -     +� ±    �        � �      � �   �   �  � 	   %� GY� H� J� SY� T� V� [Y� \� ^� cY� d� f� kY� l� n� sY� t� v� {Y� |� ~� �Y� �� �� �Y� �� �� �Y� �� �� �Y� �� �� �Y� �� �� �Y� �� �� �Y� �� �� �Y� �Y�SY�SY�SY�SY�SY�SY�SY� �Y� �SY� �SY� �SY� �SY� �SY� �SY� �SY� �SY� �SY	� �SY
� �SY� �SY� �SY� �SS� � ��    �      % � �   �   :  �� �c � � �� �  � � �	 � S �< � <�� � �  � �  �   !     ̰    �        � �    � �  �   "     � ��    �        � �    �   �   �     *L� J� P*X� V� P*`� ^� P*h� f� P*p� n� P*x� v� P*�� ~� P*�� �� P*�� �� P*�� �� P*�� �� P*�� �� P*�� �� P*�� �� P�    �        � �    4 5  �   v     :*,%� )*,+� )*,-� )*,/� )*,+� )*,1� )*,3� )*,1� )*�    �   *    : � �     : �     : � �    : � �      �   #     *� 
�    �        � �             ����  -� 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc %cfpdf2ecfc2131260858$funcEXTRACTIMAGE  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    MAP " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % I ' HTTPURLFORDIRECTORY ) 	FILESLIST + 
ATTRIBUTES - ARRAY / 
SOURCEPATH 1 DESTINATION 3 FILENAME 5 pageContext #Lcoldfusion/runtime/NeoPageContext; 7 8	  9 getOut ()Ljavax/servlet/jsp/JspWriter; ; < javax/servlet/jsp/PageContext >
 ? = parent Ljavax/servlet/jsp/tagext/Tag; A B	  C SERVICEUSERNAME E string G getVariable  (I)Lcoldfusion/runtime/Variable; I J %coldfusion/runtime/ArgumentCollection L
 M K _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; O P
  Q SERVICEPASSWORD S SOURCE U FORMAT W IMAGEPREFIX Y PASSWORD [ PAGES ]         
	
		 _ _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V a b
  c   e set (Ljava/lang/Object;)V g h coldfusion/runtime/Variable j
 k i _setCurrentLineNo (I)V m n
  o 	ISALLOWED q _get &(Ljava/lang/String;)Ljava/lang/Object; s t
  u 	isAllowed w java/lang/Object y _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; { |
  } pdf  
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; � �
  � ISALLOWEDIP � isAllowedIP � READFILEFROMURL � readFileFromURL � GETTEMPFILEPATH � getTempFilePath � imageextract � java/lang/String � ACTION � extractimage � _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V � �
  � ALLOWEXTRAATTRIBUTES � true � format � 	IsDefined (Ljava/lang/String;)Z � � coldfusion/runtime/CFPage �
 � � _Object (Z)Ljava/lang/Object; � � coldfusion/runtime/Cast �
 � � _boolean (Ljava/lang/Object;)Z � �
 � � _compare '(Ljava/lang/Object;Ljava/lang/String;)D � �
  � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � StructDelete $(Ljava/util/Map;Ljava/lang/String;)Z � �
 � � imageprefix � pages � password �          

		 � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � coldfusion/tagext/lang/PDFTag � attributecollection � _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V � � coldfusion/tagext/GenericTag �
 � � 	hasEndTag (Z)V � �
 � � 
doStartTag ()I � �
 � � doAfterBody � �
 � � doEndTag � �
 � � doCatch (Ljava/lang/Throwable;)V � �
 � � 	doFinally � 
 � �  
		 � _String &(Ljava/lang/Object;)Ljava/lang/String; � �
 � � name � DirectoryList 9(Ljava/lang/String;ZLjava/lang/String;)Ljava/lang/Object; � �
 �  

		 ArrayNew (I)Ljava/util/List;
 � 
		 1
 
GETHTTPURL 
getHttpUrl _List $(Ljava/lang/Object;)Ljava/util/List;
 � java/util/List size � bindPageVariable P(Ljava/lang/String;Lcoldfusion/runtime/LocalScope;)Lcoldfusion/runtime/Variable;
  get (I)Ljava/lang/Object; 
			! 	component# CFIDE.services.element% CreateObject 8(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/Object;'(
 �) KEY+ VALUE- // concat &(Ljava/lang/String;)Ljava/lang/String;12
 �3 2(Lcoldfusion/runtime/Variable;I)Ljava/lang/Object; {5
 6 _double (Ljava/lang/Object;)D89
 �: (D)Ljava/lang/Object; �<
 �= _arraySetAt? �
 @ 
	
		B           
	D extractImageF metaData Ljava/lang/Object;HI	 J CFIDE.services.element[]L &coldfusion/runtime/AttributeCollectionN accessP remoteR 
returntypeT 
ParametersV TYPEX NAMEZ serviceusername\ ([Ljava/lang/Object;)V ^
O_ servicepassworda sourcec getReturnType ()Ljava/lang/String; this 'Lcfpdf2ecfc2131260858$funcEXTRACTIMAGE; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; value Lcoldfusion/runtime/Variable; pdf6 Lcoldfusion/tagext/lang/PDFTag; mode6 t28 t29 Ljava/lang/Throwable; t30 t31 t32 Ljava/util/List; t33 t34 t35 t36 LineNumberTable java/lang/Throwable� <clinit> 	getAccess getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �   HI    ef j   "     M�   i       gh   kf j   "     G�   i       gh   lm j  	� 	 %  9-� +� � :+� !,� :	+#� &:
+(� &:+*� &:+,� &:+.� &:+0� &:+2� &:+4� &:+6� &:-� :� @:-� D:*FH� N� R:*TH� N� R:*VH� N� R:*XH� N� R:*ZH� N� R:*\H� N� R:*^H� N� R:-`� df� l-� p-r� vx-� zY-� ~SY-� ~SY�S� �W-� p-�� v�-� zY-� ~SY�S� �W-� p-�� v�-� zY-� ~S� �� l-� p-�� v�-� zY�S� �� l-� ~� l-� �Y�S�� �-� �YVS-� ~� �-� �Y4S-� ~� �-� �Y�S�� �- � p-�� ��� �Y� �� W-� ~f� ��~�� �� �� -!� p--� ~� ��� �W-"� p-�� ��� �Y� �� W-� ~f� ��~�� �� �� -#� p--� ~� ��� �W-$� p-¶ ��� �Y� �� W-� ~f� ��~�� �� �� -%� p--� ~� �¶ �W-&� p-Ķ ��� �Y� �� W-� ~f� ��~�� �� �� -'� p--� ~� �Ķ �W-ƶ d-� �� �� �:-+� p�-� ~� �� �� �Y6� � ���� �� :� #�� � #:� � � :� �:� ��-�� d-,� p--� ~� ���� l-� d-.� p-�� l-	� d� l-	� df� l-	� d-1� p-� v-� zY-� ~S� �� l-	� d-� ~�: 6!6" � 6#-6+�:$� � "�  :$� l� �-"� d
-3� p-$&�*� l-"� d-
� �Y,S-� ~� �-"� d-
� �Y.S-� ~� �0�4-� ~� ��4� �-"� d-� zY- �7�;�>S-
� ~�A-	� d"!`6""#��7-C� d-� ~�-E� d� Iht�nqt�Ih��nq��t������� i  t %  9gh    9no   9pI   9qr   9st   9uv   9wI   9 A B   9 x   9 x 	  9 "x 
  9 'x   9 )x   9 +x   9 -x   9 /x   9 1x   9 3x   9 5x   9 Ex   9 Sx   9 Ux   9 Wx   9 Yx   9 [x   9 ]x   9yz   9{ '   9|I   9}~   9~   9�I   9��    9� ' !  9� ' "  9� ' #  9�x $�  � � 	 � � � !  />G//NWfWWs|�||���������������� � � � �     � '!'!0!&!&!� >"="="="="P"V"P"P"="r#r#{#q#q#="�$�$�$�$�$�$�$�$�$�$�%�%�%�%�%�$�&�&�&�&�&�&�&�&�&�&'''''�& �9+9++�,�,�,�,�,�,�,�,�.�.�.�.�.�/�/�/�/�0�0�0�0�11111�1,2,2s3}3�3|3|3s3�4�4�4�4�5�5�5�5�5�5�5�5�5�5�5�6�6�6�6�6�6�62,2'9'9'9 �  j  i    Kʸ г һOY� zY�SYGSYQSYSSYUSYMSYWSY� zY�OY� zYYSYHSY[SY]S�`SY�OY� zYYSYHSY[SYbS�`SY�OY� zYYSYHSY[SYdS�`SY�OY� zYYSYHSY[SY�S�`SY�OY� zYYSYHSY[SY�S�`SY�OY� zYYSYHSY[SY�S�`SY�OY� zYYSYHSY[SY�S�`SS�`�K�   i      Kgh   � � j         �   i       gh   �� j   H     *� �YFSYTSYVSYXSYZSY\SY^S�   i       *gh   �� j   "     �K�   i       gh      j   #     *� 
�   i       gh        ����  -D 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc %cfpdf2ecfc2131260858$funcADDWATERMARK  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    
ATTRIBUTES " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % 
SOURCEPATH ' pageContext #Lcoldfusion/runtime/NeoPageContext; ) *	  + getOut ()Ljavax/servlet/jsp/JspWriter; - . javax/servlet/jsp/PageContext 0
 1 / parent Ljavax/servlet/jsp/tagext/Tag; 3 4	  5 SERVICEUSERNAME 7 string 9 getVariable  (I)Lcoldfusion/runtime/Variable; ; < %coldfusion/runtime/ArgumentCollection >
 ? = _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; A B
  C SERVICEPASSWORD E SOURCE G COPYFROMURL I IMAGEURL K 
FOREGROUND M ISBASE64 O OPACITY Q PAGES S PASSWORD U POSITION W ROTATION Y SHOWONPRINT [ 
		 ] _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V _ `
  a _setCurrentLineNo (I)V c d
  e 	ISALLOWED g _get &(Ljava/lang/String;)Ljava/lang/Object; i j
  k 	isAllowed m java/lang/Object o _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; q r
  s pdf u 
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; w x
  y ISALLOWEDIP { isAllowedIP } READFILEFROMURL  readFileFromURL � set (Ljava/lang/Object;)V � � coldfusion/runtime/Variable �
 � � java/lang/String � ACTION � addwatermark � _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V � �
  � ALLOWEXTRAATTRIBUTES � true � copyfromurl � 	IsDefined (Ljava/lang/String;)Z � � coldfusion/runtime/CFPage �
 � � _Object (Z)Ljava/lang/Object; � � coldfusion/runtime/Cast �
 � � _boolean (Ljava/lang/Object;)Z � �
 � �   � _compare '(Ljava/lang/Object;Ljava/lang/String;)D � �
  � COPYFROMPATH � _set '(Ljava/lang/String;Ljava/lang/Object;)V � �
  � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � copyfrom � q j
  � StructInsert 6(Ljava/util/Map;Ljava/lang/String;Ljava/lang/Object;)Z � �
 � � imageurl � 	IMAGEPATH � image � 
foreground � StructDelete $(Ljava/util/Map;Ljava/lang/String;)Z � �
 � � isbase64 � opacity � pages � password � position � rotation � showonprint � destination � DESTINATION � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � coldfusion/tagext/lang/PDFTag � attributecollection � _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V � � coldfusion/tagext/GenericTag �
 � � 	hasEndTag (Z)V � �
 � � _emptyTcfTag !(Ljavax/servlet/jsp/tagext/Tag;)Z � �
  �  
		 
GETHTTPURL 
getHttpUrl 
	 metaData Ljava/lang/Object;	
	  &coldfusion/runtime/AttributeCollection name access remote 
returntype 
Parameters TYPE NAME serviceusername ([Ljava/lang/Object;)V 
  servicepassword" source$ getReturnType ()Ljava/lang/String; this 'Lcfpdf2ecfc2131260858$funcADDWATERMARK; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; value Lcoldfusion/runtime/Variable; pdf0 Lcoldfusion/tagext/lang/PDFTag; LineNumberTable <clinit> 	getAccess ()I getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �   	
    &' +   !     :�   *       ()   ,' +   !     ��   *       ()   -. +  
i 
   �-� +� � :+� !,� :	+#� &:
+(� &:-� ,� 2:-� 6:*8:� @� D:*F:� @� D:*H:� @� D:*J:� @� D:*L:� @� D:*N:� @� D:*P:� @� D:*R:� @� D:*T:� @� D:*V:	� @� D:*X:
� @� D:*Z:� @� D:*\:� @� D:-^� b-� f-h� ln-� pY-� tSY-� tSYvS� zW-� f-|� l~-� pY-� tSYvS� zW-� f-�� l�-� pY-� tS� z� �
-� t� �-
� �Y�S�� �-
� �YHS-� t� �-
� �Y�S�� �-� f-�� �� �Y� �� W-� t�� ��~� �� �� D-�-� f-�� l�-� pY-� tS� z� �-� f--
� t� ��-�� �� �W- � f-¶ �� �Y� �� W-� t�� ��~� �� �� D-�-"� f-�� l�-� pY-� tS� z� �-#� f--
� t� ��-Ķ �� �W-%� f-ȶ ��� �Y� �� W-� t�� ��~�� �� �� -&� f--
� t� �ȶ �W-'� f-ζ ��� �Y� �� W-� t�� ��~�� �� �� -(� f--
� t� �ζ �W-)� f-ж ��� �Y� �� W-� t�� ��~�� �� �� -*� f--
� t� �ж �W-+� f-Ҷ ��� �Y� �� W-� t�� ��~�� �� �� -,� f--
� t� �Ҷ �W--� f-Զ ��� �Y� �� W-� t�� ��~�� �� �� -.� f--
� t� �Զ �W-/� f-ֶ ��� �Y� �� W-� t�� ��~�� �� �� -0� f--
� t� �ֶ �W-1� f-ض ��� �Y� �� W-� t�� ��~�� �� �� -2� f--
� t� �ض �W-3� f-ڶ ��� �Y� �� W-� t�� ��~�� �� �� -4� f--
� t� �ڶ �W-5� f-ܶ ��� �Y� �� W-޶ ��� ��~�� �� �� -6� f--
� t� �ܶ �W-^� b-� �� �� �:-8� f�-
� t� �� �� � �-� b-9� f-� l-� pY-� tS� z�-� b�   *     �()    �/0   �1
   �23   �45   �67   �8
   � 3 4   � 9   � 9 	  � "9 
  � '9   � 79   � E9   � G9   � I9   � K9   � M9   � O9   � Q9   � S9   � U9   � W9   � Y9   � [9   �:; <  � �  , ; D M , , Z i r Z Z y � � � � � � � � � � � � � � � � � � � � � � � �  &    : : C E E 9 9  � V  U  U  f  l  f  f  U  � "� "� "� "~ "� #� #� #� #� #� #� #~ !U  � %� %� %� %� %� %� %� %� %� %� &� & &� &� &� % ' ' ' ' '! '' '! '! ' 'B (B (K (A (A ( 'X )W )W )W )W )j )p )j )j )W )� *� *� *� *� *W )� +� +� +� +� +� +� +� +� +� +� ,� ,� ,� ,� ,� +� -� -� -� -� -� - -� -� -� - . .& . . .� -3 /2 /2 /2 /2 /E /K /E /E /2 /f 0f 0o 0e 0e 02 /| 1{ 1{ 1{ 1{ 1� 1� 1� 1� 1{ 1� 2� 2� 2� 2� 2{ 1� 3� 3� 3� 3� 3� 3� 3� 3� 3� 3� 4� 4 4� 4� 4� 3 5 5 5 5 5  5& 5  5  5 5A 6A 6J 6@ 6@ 6 5, q 8q 8X 8� 9� 9� 9� 9� 9 =  +  F    (� � �Y� pYSY�SYSYSYSY:SYSY� pY�Y� pYSY:SYSYS�!SY�Y� pYSY:SYSY#S�!SY�Y� pYSY:SYSY%S�!SY�Y� pYSY:SYSY�S�!SY�Y� pYSY:SYSY�S�!SY�Y� pYSY:SYSY�S�!SY�Y� pYSY:SYSY�S�!SY�Y� pYSY:SYSY�S�!SY�Y� pYSY:SYSY�S�!SY	�Y� pYSY:SYSY�S�!SY
�Y� pYSY:SYSY�S�!SY�Y� pYSY:SYSY�S�!SY�Y� pYSY:SYSY�S�!SS�!��   *      (()   >? +         �   *       ()   @A +   l     N� �Y8SYFSYHSYJSYLSYNSYPSYRSYTSY	VSY
XSYZSY\S�   *       N()   BC +   "     ��   *       ()      +   #     *� 
�   *       ()        ����  - 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc $cfpdf2ecfc2131260858$funcDELETEPAGES  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    
ATTRIBUTES " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % 
SOURCEPATH ' pageContext #Lcoldfusion/runtime/NeoPageContext; ) *	  + getOut ()Ljavax/servlet/jsp/JspWriter; - . javax/servlet/jsp/PageContext 0
 1 / parent Ljavax/servlet/jsp/tagext/Tag; 3 4	  5 SERVICEUSERNAME 7 string 9 getVariable  (I)Lcoldfusion/runtime/Variable; ; < %coldfusion/runtime/ArgumentCollection >
 ? = _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; A B
  C SERVICEPASSWORD E SOURCE G PAGES I PASSWORD K 
		 M _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V O P
  Q _setCurrentLineNo (I)V S T
  U 	ISALLOWED W _get &(Ljava/lang/String;)Ljava/lang/Object; Y Z
  [ 	isAllowed ] java/lang/Object _ _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; a b
  c pdf e 
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; g h
  i ISALLOWEDIP k isAllowedIP m READFILEFROMURL o readFileFromURL q set (Ljava/lang/Object;)V s t coldfusion/runtime/Variable v
 w u java/lang/String y ACTION { deletepages } _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V  �
  � ALLOWEXTRAATTRIBUTES � true � password � 	IsDefined (Ljava/lang/String;)Z � � coldfusion/runtime/CFPage �
 � � _Object (Z)Ljava/lang/Object; � � coldfusion/runtime/Cast �
 � � _boolean (Ljava/lang/Object;)Z � �
 � �   � _compare '(Ljava/lang/Object;Ljava/lang/String;)D � �
  � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � StructDelete $(Ljava/util/Map;Ljava/lang/String;)Z � �
 � � 			
		 � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � coldfusion/tagext/lang/PDFTag � attributecollection � _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V � � coldfusion/tagext/GenericTag �
 � � 	hasEndTag (Z)V � �
 � � _emptyTcfTag !(Ljavax/servlet/jsp/tagext/Tag;)Z � �
  �  
		 � 
GETHTTPURL � 
getHttpUrl � 			
	 � metaData Ljava/lang/Object; � �	  � &coldfusion/runtime/AttributeCollection � name � access � remote � 
returntype � 
Parameters � TYPE � NAME � serviceusername � ([Ljava/lang/Object;)V  �
 � � servicepassword � source � pages � getReturnType ()Ljava/lang/String; this &Lcfpdf2ecfc2131260858$funcDELETEPAGES; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; value Lcoldfusion/runtime/Variable; pdf1 Lcoldfusion/tagext/lang/PDFTag; LineNumberTable <clinit> 	getAccess ()I getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �    � �     � �  �   !     :�    �        � �    � �  �   !     ~�    �        � �    � �  �  � 	   -� +� � :+� !,� :	+#� &:
+(� &:-� ,� 2:-� 6:*8:� @� D:*F:� @� D:*H:� @� D:*J:� @� D:*L:� @� D:-N� R-C� V-X� \^-� `Y-� dSY-� dSYfS� jW-D� V-l� \n-� `Y-� dSYfS� jW-E� V-p� \r-� `Y-� dS� j� x
-� d� x-
� zY|S~� �-
� zYHS-� d� �-
� zY�S�� �-L� V-�� ��� �Y� �� W-� d�� ��~�� �� �� -M� V--
� d� ��� �W-�� R-� �� �� �:-O� V�-
� d� �� �� ʙ �-̶ R-P� V-ζ \�-� `Y-� dS� j�-Ҷ R�    �   �    � �     � �    � �    � �           �    3 4         	   " 
   '    7    E    G    I    K       � 6  < � C � C � C � C � C � C � D � D � D � D � D � E � E E � E � E G G G% H% H H6 I6 I* IK JK J? JW LV LV LV LV Li Lo Li Li LV L� M� M� M� M� MV L � B� O� O� O� P� P� P� P� P 	   �       ��� �� �� �Y� `Y�SY~SY�SY�SY�SY:SY�SY� `Y� �Y� `Y�SY:SY�SY�S� �SY� �Y� `Y�SY:SY�SY�S� �SY� �Y� `Y�SY:SY�SY�S� �SY� �Y� `Y�SY:SY�SY�S� �SY� �Y� `Y�SY:SY�SY�S� �SS� � ֱ    �       � � �   
  �         �    �        � �     �   <     � zY8SYFSYHSYJSYLS�    �        � �     �   "     � ְ    �        � �       �   #     *� 
�    �        � �        ����  -" 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc  cfpdf2ecfc2131260858$funcPROTECT  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    
ATTRIBUTES " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % 
SOURCEPATH ' DESTINATION ) pageContext #Lcoldfusion/runtime/NeoPageContext; + ,	  - getOut ()Ljavax/servlet/jsp/JspWriter; / 0 javax/servlet/jsp/PageContext 2
 3 1 parent Ljavax/servlet/jsp/tagext/Tag; 5 6	  7 SERVICEUSERNAME 9 string ; getVariable  (I)Lcoldfusion/runtime/Variable; = > %coldfusion/runtime/ArgumentCollection @
 A ? _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; C D
  E SERVICEPASSWORD G SOURCE I NEWUSERPASSWORD K NEWOWNERPASSWORD M PERMISSIONS O ENCRYPT Q PASSWORD S         
		 U _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V W X
  Y _setCurrentLineNo (I)V [ \
  ] 	ISALLOWED _ _get &(Ljava/lang/String;)Ljava/lang/Object; a b
  c 	isAllowed e java/lang/Object g _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; i j
  k pdf m 
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; o p
  q ISALLOWEDIP s isAllowedIP u READFILEFROMURL w readFileFromURL y set (Ljava/lang/Object;)V { | coldfusion/runtime/Variable ~
  } GETTEMPFILEPATH � getTempFilePath � java/lang/String � ACTION � protect � _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V � �
  � ALLOWEXTRAATTRIBUTES � true � newUserPassword � 	IsDefined (Ljava/lang/String;)Z � � coldfusion/runtime/CFPage �
 � � _Object (Z)Ljava/lang/Object; � � coldfusion/runtime/Cast �
 � � _boolean (Ljava/lang/Object;)Z � �
 � �   � _compare '(Ljava/lang/Object;Ljava/lang/String;)D � �
  � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � StructDelete $(Ljava/util/Map;Ljava/lang/String;)Z � �
 � � newOwnerPassword � encrypt � password � 	
		 � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � coldfusion/tagext/lang/PDFTag � attributecollection � _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V � � coldfusion/tagext/GenericTag �
 � � 	hasEndTag (Z)V � �
 � � _emptyTcfTag !(Ljavax/servlet/jsp/tagext/Tag;)Z � �
  �  
		 � 
GETHTTPURL � 
getHttpUrl � 			
	 � metaData Ljava/lang/Object; � �	  � &coldfusion/runtime/AttributeCollection � name � access � remote � 
returntype � 
Parameters � TYPE � NAME � serviceusername � ([Ljava/lang/Object;)V  �
 � � servicepassword � source  permissions getReturnType ()Ljava/lang/String; this "Lcfpdf2ecfc2131260858$funcPROTECT; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; value Lcoldfusion/runtime/Variable; pdf10 Lcoldfusion/tagext/lang/PDFTag; LineNumberTable <clinit> 	getAccess ()I getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �    � �     	   !     <�             
 	   !     ��              	   	   e-� +� � :+� !,� :	+#� &:
+(� &:+*� &:-� .� 4:-� 8:*:<� B� F:*H<� B� F:*J<� B� F:*L<� B� F:*N<� B� F:*P<� B� F:*R<� B� F:*T<� B� F:-V� Z-�� ^-`� df-� hY-� lSY-� lSYnS� rW-�� ^-t� dv-� hY-� lSYnS� rW-�� ^-x� dz-� hY-� lS� r� �-�� ^-�� d�-� hY-� lS� r� �
-� l� �-
� �Y�S�� �-
� �YJS-� l� �-
� �Y*S-� l� �-
� �Y�S�� �-�� ^-�� ��� �Y� �� W-� l�� ��~�� �� �� -�� ^--
� l� ��� �W-�� ^-�� ��� �Y� �� W-� l�� ��~�� �� �� -�� ^--
� l� ��� �W-�� ^-�� ��� �Y� �� W-� l�� ��~�� �� �� -�� ^--
� l� ��� �W-�� ^-�� ��� �Y� �� W-� l�� ��~�� �� �� -�� ^--
� l� ��� �W-�� Z-� �� �� �:-�� ^�-
� l� �� �� ܙ �-޶ Z-�� ^-� d�-� hY-� lS� r�-� Z�      �   e    e   e �   e   e   e   e �   e 5 6   e    e  	  e " 
  e '   e )   e 9   e G   e I   e K   e M   e O   e Q   e S   e   � n � �� �� �� �� �� ��
��"�
�
�)�2�A�2�2�N�W�f�W�W�s�u�u�����~���������������������������������������������������/�5�/�/��Q�Q�Z�P�P��h�g�g�g�g�z���z�z�g�����������g��������������������������������� ������A�P�A�A�A�   	  w    Y�� ĳ ƻ �Y� hY�SY�SY�SY�SY�SY<SY�SY� hY� �Y� hY�SY<SY�SY�S� �SY� �Y� hY�SY<SY�SY�S� �SY� �Y� hY�SY<SY�SYS� �SY� �Y� hY�SY<SY�SY�S� �SY� �Y� hY�SY<SY�SY�S� �SY� �Y� hY�SY<SY�SYS� �SY� �Y� hY�SY<SY�SY�S� �SY� �Y� hY�SY<SY�SY�S� �SS� �� �         Y    	         �              	   N     0� �Y:SYHSYJSYLSYNSYPSYRSYTS�          0    ! 	   "     � �                	   #     *� 
�                  ����  - � 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc Acfpdf2ecfc2131260858$funcCONVERTARRAYOFSTRUCTTOPDFPAGEDETAILARRAY  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    MAP " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % I ' ARRAY ) KEY + pageContext #Lcoldfusion/runtime/NeoPageContext; - .	  / getOut ()Ljavax/servlet/jsp/JspWriter; 1 2 javax/servlet/jsp/PageContext 4
 5 3 parent Ljavax/servlet/jsp/tagext/Tag; 7 8	  9 VALUE ; array = getVariable  (I)Lcoldfusion/runtime/Variable; ? @ %coldfusion/runtime/ArgumentCollection B
 C A _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; E F
  G ROTATION I 
   			
       K _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V M N
  O _setCurrentLineNo (I)V Q R
  S ArrayNew (I)Ljava/util/List; U V coldfusion/runtime/CFPage X
 Y W set (Ljava/lang/Object;)V [ \ coldfusion/runtime/Variable ^
 _ ] 
       a 1 c   e _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; g h
  i _List $(Ljava/lang/Object;)Ljava/util/List; k l coldfusion/runtime/Cast n
 o m java/util/List q size ()I s t r u bindPageVariable P(Ljava/lang/String;Lcoldfusion/runtime/LocalScope;)Lcoldfusion/runtime/Variable; w x
  y get (I)Ljava/lang/Object; { | r } 

          	component � CFIDE.services.pdfpagedetail � CreateObject 8(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/Object; � �
 Y � java/lang/String � HEIGHT � _resolveAndAutoscalarize D(Lcoldfusion/runtime/Variable;[Ljava/lang/String;)Ljava/lang/Object; � �
  � _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V � �
  � WIDTH � _arrayGetAt C(Lcoldfusion/runtime/Variable;Ljava/lang/Object;)Ljava/lang/Object; � �
  � java/lang/Object � 2(Lcoldfusion/runtime/Variable;I)Ljava/lang/Object; g �
  � _double (Ljava/lang/Object;)D � �
 o � _Object (D)Ljava/lang/Object; � �
 o � _arraySetAt � �
  � 
    � (convertArrayOfStructToPDFPageDetailArray � metaData Ljava/lang/Object; � �	  � CFIDE.services.pdfpagedetail[] � &coldfusion/runtime/AttributeCollection � name � access � private � 
returntype � 
Parameters � TYPE � NAME � value � ([Ljava/lang/Object;)V  �
 � � rotation � getReturnType ()Ljava/lang/String; this CLcfpdf2ecfc2131260858$funcCONVERTARRAYOFSTRUCTTOPDFPAGEDETAILARRAY; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; Lcoldfusion/runtime/Variable; t16 Ljava/util/List; t17 t18 t19 t20 LineNumberTable <clinit> 	getAccess getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �     � �  �   !     ��    �        � �    � �  �   !     ��    �        � �    � �  �  w 	   �-� +� � :+� !,� :	+#� &:
+(� &:+*� &:+,� &:-� 0� 6:-� ::*<>� D� H:*J>� D� H:-L� P- �� T-� Z� `-b� Pd� `-b� Pf� `-b� P-� j� p:66� v 6-,+� z:� �� ~ :� `� �-�� P
- �� T-��� �� `-�� P-
� �Y�S-� �Y�S� �� �-�� P-
� �Y�S-� �Y�S� �� �-�� P-
� �YJS--� j� �� �-�� P-� �Y- � �� �� �S-
� j� �-b� P`6�� -b� P-� j�-�� P�    �   �   � � �    � � �   � � �   � � �   � � �   � � �   � � �   � 7 8   �  �   �  � 	  � " � 
  � ' �   � ) �   � + �   � ; �   � I �   � � �   � � '   � � '   � � '   � � �  �   � /  � t � ~ � } � } � t � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � �? �? �3 �3 �h �e �e �Y �Y �� �� �� �� �� �| �| �� � � �� �� �� �  �   �   �     �� �Y� �Y�SY�SY�SY�SY�SY�SY�SY� �Y� �Y� �Y�SY>SY�SY�S� �SY� �Y� �Y�SY>SY�SY�S� �SS� ɳ ��    �       � � �    � t  �         �    �        � �    � �  �   -     � �Y<SYJS�    �        � �    � �  �   "     � ��    �        � �       �   #     *� 
�    �        � �        ����  -& 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc $cfpdf2ecfc2131260858$funcEXTRACTTEXT  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    
ATTRIBUTES " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % INFO ' pageContext #Lcoldfusion/runtime/NeoPageContext; ) *	  + getOut ()Ljavax/servlet/jsp/JspWriter; - . javax/servlet/jsp/PageContext 0
 1 / parent Ljavax/servlet/jsp/tagext/Tag; 3 4	  5 SERVICEUSERNAME 7 string 9 getVariable  (I)Lcoldfusion/runtime/Variable; ; < %coldfusion/runtime/ArgumentCollection >
 ? = _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; A B
  C SERVICEPASSWORD E SOURCE G PASSWORD I PAGES K ADDQUADS M HONOURSPACES O USESTRUCTURE Q TYPE S         

		 U _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V W X
  Y   [ set (Ljava/lang/Object;)V ] ^ coldfusion/runtime/Variable `
 a _ _setCurrentLineNo (I)V c d
  e 	ISALLOWED g _get &(Ljava/lang/String;)Ljava/lang/Object; i j
  k 	isAllowed m java/lang/Object o _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; q r
  s pdf u 
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; w x
  y ISALLOWEDIP { isAllowedIP } 
SOURCEPATH  READFILEFROMURL � readFileFromURL � _set '(Ljava/lang/String;Ljava/lang/Object;)V � �
  � java/lang/String � ACTION � extracttext � _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V � �
  � NAME � info � q j
  � ALLOWEXTRAATTRIBUTES � true � addquads � 	IsDefined (Ljava/lang/String;)Z � � coldfusion/runtime/CFPage �
 � � _Object (Z)Ljava/lang/Object; � � coldfusion/runtime/Cast �
 � � _boolean (Ljava/lang/Object;)Z � �
 � � _compare '(Ljava/lang/Object;Ljava/lang/String;)D � �
  � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � StructDelete $(Ljava/util/Map;Ljava/lang/String;)Z � �
 � � password � honourspaces � usestructure � type � pages � 				

		 � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � coldfusion/tagext/lang/PDFTag � attributecollection � _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V � � coldfusion/tagext/GenericTag �
 � � 	hasEndTag (Z)V � �
 � � _emptyTcfTag !(Ljavax/servlet/jsp/tagext/Tag;)Z � �
  � 
		 � 			
	 � extractText � metaData Ljava/lang/Object; � �	  � &coldfusion/runtime/AttributeCollection � name � access � remote � 
returntype � 
Parameters � serviceusername � ([Ljava/lang/Object;)V 
 � servicepassword source getReturnType ()Ljava/lang/String; this &Lcfpdf2ecfc2131260858$funcEXTRACTTEXT; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; value Lcoldfusion/runtime/Variable; pdf5 Lcoldfusion/tagext/lang/PDFTag; LineNumberTable <clinit> 	getAccess ()I getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �    � �    	    !     :�          
   	    !     �          
      � 
   �-� +� � :+� !,� :	+#� &:
+(� &:-� ,� 2:-� 6:*8:� @� D:*F:� @� D:*H:� @� D:*J:� @� D:*L:� @� D:*N:� @� D:*P:� @� D:*R:� @� D:*T:� @� D:-V� Z\� b- � f-h� ln-� pY-� tSY-� tSYvS� zW- �� f-|� l~-� pY-� tSYvS� zW-�- � f-�� l�-� pY-� tS� z� �
-� t� b-
� �Y�S�� �-
� �Y�S�� �-
� �YHS-�� �� �-
� �Y�S�� �- �� f-�� ��� �Y� �� W-� t\� ��~�� �� �� - �� f--
� t� ��� �W- �� f-�� ��� �Y� �� W-� t\� ��~�� �� �� - �� f--
� t� ��� �W- �� f-�� ��� �Y� �� W-� t\� ��~�� �� �� - �� f--
� t� ��� �W- �� f-�� ��� �Y� �� W-� t\� ��~�� �� �� - �� f--
� t� ��� �W- �� f-¶ ��� �Y� �� W-� t\� ��~�� �� �� - �� f--
� t� �¶ �W- � f-Ķ ��� �Y� �� W-� t\� ��~�� �� �� -� f--
� t� �Ķ �W-ƶ Z-� �� �� �:-� f�-
� t� �� �� � �-� Z-� t�-� Z�      �   �
    �   � �   �   �   �   � �   � 3 4   �    �  	  � " 
  � '   � 7   � E   � G   � I   � K   � M   � O   � Q   � S   �   * �  � � � � � � � � � � � � � � � � � �* �3 � � �D �S �D �D �: �` �b �b �w �w �k �� �� �| �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� � � � � � � � � � � �: �: �C �9 �9 � �Q �P �P �P �P �c �i �c �c �P �� �� �� �� �� �P �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� � � �$ � � �� �2 1 1 1 1 D J D D 1 ffoee1  � ���}���     �    }ʸ г һ �Y� pY�SY�SY�SY�SY�SY:SY�SY	� pY� �Y� pYTSY:SY�SY S�SY� �Y� pYTSY:SY�SYS�SY� �Y� pYTSY:SY�SYS�SY� �Y� pYTSY:SY�SY�S�SY� �Y� pYTSY:SY�SY�S�SY� �Y� pYTSY:SY�SY�S�SY� �Y� pYTSY:SY�SY�S�SY� �Y� pYTSY:SY�SY�S�SY� �Y� pYTSY:SY�SY�S�SS�� �         }
    !          �          
   "#    T     6	� �Y8SYFSYHSYJSYLSYNSYPSYRSYTS�          6
   $%    "     � �          
         #     *� 
�          
        ����  -" 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc %cfpdf2ecfc2131260858$funcEXTRACTPAGES  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    
ATTRIBUTES " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % pageContext #Lcoldfusion/runtime/NeoPageContext; ' (	  ) getOut ()Ljavax/servlet/jsp/JspWriter; + , javax/servlet/jsp/PageContext .
 / - parent Ljavax/servlet/jsp/tagext/Tag; 1 2	  3 SERVICEUSERNAME 5 string 7 getVariable  (I)Lcoldfusion/runtime/Variable; 9 : %coldfusion/runtime/ArgumentCollection <
 = ; _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; ? @
  A SERVICEPASSWORD C SOURCE E PASSWORD G PAGES I KEEPBOOKMARK K         
		 M _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V O P
  Q _setCurrentLineNo (I)V S T
  U 	ISALLOWED W _get &(Ljava/lang/String;)Ljava/lang/Object; Y Z
  [ 	isAllowed ] java/lang/Object _ _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; a b
  c pdf e 
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; g h
  i ISALLOWEDIP k isAllowedIP m 
SOURCEPATH o READFILEFROMURL q readFileFromURL s _set '(Ljava/lang/String;Ljava/lang/Object;)V u v
  w DESTINATION y GETTEMPFILEPATH { getTempFilePath } a Z
   set (Ljava/lang/Object;)V � � coldfusion/runtime/Variable �
 � � java/lang/String � ACTION � merge � _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V � �
  � ALLOWEXTRAATTRIBUTES � true � keepbookmark � 	IsDefined (Ljava/lang/String;)Z � � coldfusion/runtime/CFPage �
 � � _Object (Z)Ljava/lang/Object; � � coldfusion/runtime/Cast �
 � � _boolean (Ljava/lang/Object;)Z � �
 � �   � _compare '(Ljava/lang/Object;Ljava/lang/String;)D � �
  � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � StructDelete $(Ljava/util/Map;Ljava/lang/String;)Z � �
 � � password � 			
		 � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � coldfusion/tagext/lang/PDFTag � attributecollection � _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V � � coldfusion/tagext/GenericTag �
 � � 	hasEndTag (Z)V � �
 � � _emptyTcfTag !(Ljavax/servlet/jsp/tagext/Tag;)Z � �
  �  
		 � 
GETHTTPURL � 
getHttpUrl � 			
	 � extractPages � metaData Ljava/lang/Object; � �	  � &coldfusion/runtime/AttributeCollection � name � access � remote � 
returntype � 
Parameters � TYPE � NAME � serviceusername � ([Ljava/lang/Object;)V  �
 � � servicepassword � source  pages getReturnType ()Ljava/lang/String; this 'Lcfpdf2ecfc2131260858$funcEXTRACTPAGES; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; value Lcoldfusion/runtime/Variable; pdf4 Lcoldfusion/tagext/lang/PDFTag; LineNumberTable <clinit> 	getAccess ()I getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �    � �     	   !     8�             
 	   !     �              	  � 
   �-� +� � :+� !,� :	+#� &:
-� *� 0:-� 4:*68� >� B:*D8� >� B:*F8� >� B:*H8� >� B:*J8� >� B:*L8� >� B:-N� R- ʶ V-X� \^-� `Y-� dSY-� dSYfS� jW- ˶ V-l� \n-� `Y-� dSYfS� jW-p- ̶ V-r� \t-� `Y-� dS� j� x-z- Ͷ V-|� \~-� `Y-p� �S� j� x
-� d� �-
� �Y�S�� �-
� �YFS-p� �� �-
� �YzS-z� �� �-
� �Y�S�� �- ն V-�� ��� �Y� �� W-� d�� ��~�� �� �� - ֶ V--
� d� ��� �W- ׶ V-�� ��� �Y� �� W-� d�� ��~�� �� �� - ض V--
� d� ��� �W-�� R-� �� �� �:- ڶ V�-
� d� �� �� ڙ �-ܶ R- ۶ V-޶ \�-� `Y-z� �S� j�-� R�      �   �    �   � �   �   �   �   � �   � 1 2   �    �  	  � " 
  � 5   � C   � E   � G   � I   � K   �   : N  � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � �% �4 �% �% � �A �C �C �X �X �L �i �i �] �~ �~ �r �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� � �� �� �� � � �( � � �� � � �P �P �6 �y �� �y �y �y �   	  1    �� ³ Ļ �Y� `Y�SY�SY�SY�SY�SY8SY�SY� `Y� �Y� `Y�SY8SY�SY�S� �SY� �Y� `Y�SY8SY�SY�S� �SY� �Y� `Y�SY8SY�SYS� �SY� �Y� `Y�SY8SY�SY�S� �SY� �Y� `Y�SY8SY�SYS� �SY� �Y� `Y�SY8SY�SY�S� �SS� �� �             	         �              	   B     $� �Y6SYDSYFSYHSYJSYLS�          $    ! 	   "     � �                	   #     *� 
�                  ����  -E 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc #cfpdf2ecfc2131260858$funcMERGEFILES  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    SOURCEPATHS " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % 
ATTRIBUTES ' SOURCEINDEX ) DESTINATION + pageContext #Lcoldfusion/runtime/NeoPageContext; - .	  / getOut ()Ljavax/servlet/jsp/JspWriter; 1 2 javax/servlet/jsp/PageContext 4
 5 3 parent Ljavax/servlet/jsp/tagext/Tag; 7 8	  9 SERVICEUSERNAME ; string = getVariable  (I)Lcoldfusion/runtime/Variable; ? @ %coldfusion/runtime/ArgumentCollection B
 C A _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; E F
  G SERVICEPASSWORD I SOURCE K KEEPBOOKMARK M #        
                     
		 O _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V Q R
  S _setCurrentLineNo (I)V U V
  W 	ISALLOWED Y _get &(Ljava/lang/String;)Ljava/lang/Object; [ \
  ] 	isAllowed _ java/lang/Object a _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; c d
  e pdf g 
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; i j
  k ISALLOWEDIP m isAllowedIP o 
       		  q   s set (Ljava/lang/Object;)V u v coldfusion/runtime/Variable x
 y w 
		 { _String &(Ljava/lang/Object;)Ljava/lang/String; } ~ coldfusion/runtime/Cast �
 �  , � bindPageVariable P(Ljava/lang/String;Lcoldfusion/runtime/LocalScope;)Lcoldfusion/runtime/Variable; � �
  � java/util/StringTokenizer � '(Ljava/lang/String;Ljava/lang/String;)V  �
 � � 	nextToken ()Ljava/lang/String; � �
 � � 
        		 � READFILEFROMURL � readFileFromURL � concat &(Ljava/lang/String;)Ljava/lang/String; � � java/lang/String �
 � � 
        	 � CFLOOP � checkRequestTimeout � 
  � hasMoreTokens ()Z � �
 � � GETTEMPFILEPATH � getTempFilePath � .pdf � ACTION � merge � _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V � �
  � ALLOWEXTRAATTRIBUTES � true � keepbookmark � 	IsDefined (Ljava/lang/String;)Z � � coldfusion/runtime/CFPage �
 � � _Object (Z)Ljava/lang/Object; � �
 � � _boolean (Ljava/lang/Object;)Z � �
 � � _compare '(Ljava/lang/Object;Ljava/lang/String;)D � �
  � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � StructDelete $(Ljava/util/Map;Ljava/lang/String;)Z � �
 � � 			
		 � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � coldfusion/tagext/lang/PDFTag � attributecollection � _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V � � coldfusion/tagext/GenericTag �
 � � 	hasEndTag (Z)V � �
 � � _emptyTcfTag !(Ljavax/servlet/jsp/tagext/Tag;)Z � �
  �  
		 � 
GETHTTPURL � 
getHttpUrl � 			
	 
mergeFiles metaData Ljava/lang/Object;	  &coldfusion/runtime/AttributeCollection	 name access remote 
returntype 
Parameters TYPE NAME serviceusername ([Ljava/lang/Object;)V 

 servicepassword source  getReturnType this %Lcfpdf2ecfc2131260858$funcMERGEFILES; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; value Lcoldfusion/runtime/Variable; t18 Ljava/lang/String; t19 t20 t21 Ljava/util/StringTokenizer; pdf3 Lcoldfusion/tagext/lang/PDFTag; LineNumberTable <clinit> 	getAccess ()I getParamList ()[Ljava/lang/String; getMetadata ()Ljava/lang/Object; 1       � �       " � &   !     >�   %       #$   ' � &   "     �   %       #$   () &  ' 
   �-� +� � :+� !,� :	+#� &:
+(� &:+*� &:+,� &:-� 0� 6:-� ::*<>� D� H:*J>� D� H:*L>� D� H:*N>� D� H:-P� T- �� X-Z� ^`-� bY-� fSY-� fSYhS� lW- �� X-n� ^p-� bY-� fSYhS� lW-r� T
t� z-r� Tt� z-|� T-� f� �:�:-*+� �:� �Y� �:� _� �:� z-�� T
-
� f� �- �� X-�� ^�-� bY-� fS� l� �� ��� �� z-�� T�� �� ����-|� T- �� X-�� ^�-� bY�S� l� z-� f� z-� �Y�S�� �-� �YLS-
� f� �-� �Y,S-� f� �-� �Y�S�� �- �� X-�� ��� �Y� ʚ W-� ft� ��~�� Ƹ ʙ - �� X--� f� ��� �W-ض T-� �� �� �:- �� X�-� f� �� �� �� �-�� T- �� X-�� ^ -� bY-� fS� l�-� T�   %   �   �#$    �*+   �,   �-.   �/0   �12   �3   � 7 8   � 4   � 4 	  � "4 
  � '4   � )4   � +4   � ;4   � I4   � K4   � M4   �56   �76   �84   �9:   �;< =  N S  � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � � �Q �Q �a �p �a �a �Q �Q �� �Q �Q �O �O �� � �� �� �� �� �� �� �� �� �� �� �� �� �� �� � � �� � � � �% �$ �$ �$ �$ �7 �= �7 �7 �$ �Y �Y �b �X �X �$ �� �� �� �p �� �� �� �� �� � >  &   �     �ܸ � �
Y� bYSYSYSYSYSY>SYSY� bY�
Y� bYSY>SYSYS�SY�
Y� bYSY>SYSYS�SY�
Y� bYSY>SYSY!S�SY�
Y� bYSY>SYSY�S�SS���   %       �#$   ?@ &         �   %       #$   AB &   7     � �Y<SYJSYLSYNS�   %       #$   CD &   "     ��   %       #$      &   #     *� 
�   %       #$        ����  -� 
SourceFile 6E:\cf9_u2_final\cfusion\wwwroot\CFIDE\services\pdf.cfc #cfpdf2ecfc2131260858$funcPROCESSDDX  coldfusion/runtime/UDFMethod  <init> ()V  
  	 com.adobe.coldfusion.*  bindImportPath (Ljava/lang/String;)V   coldfusion/runtime/CfJspPage 
   coldfusion/util/Key  	ARGUMENTS Lcoldfusion/util/Key;  	   bindInternal F(Lcoldfusion/util/Key;Ljava/lang/Object;)Lcoldfusion/runtime/Variable;   coldfusion/runtime/LocalScope 
   THIS  	    KVPAIR " 1(Ljava/lang/String;)Lcoldfusion/runtime/Variable;  $
  % MODIFIEDRESULT ' 
ATTRIBUTES ) VALUE + KEY - pageContext #Lcoldfusion/runtime/NeoPageContext; / 0	  1 getOut ()Ljavax/servlet/jsp/JspWriter; 3 4 javax/servlet/jsp/PageContext 6
 7 5 parent Ljavax/servlet/jsp/tagext/Tag; 9 :	  ; SERVICEUSERNAME = string ? getVariable  (I)Lcoldfusion/runtime/Variable; A B %coldfusion/runtime/ArgumentCollection D
 E C _validateArg a(Ljava/lang/String;ZLjava/lang/String;Lcoldfusion/runtime/Variable;)Lcoldfusion/runtime/Variable; G H
  I SERVICEPASSWORD K 	DDXSTRING M 
INPUTFILES O CFIDE.services.element[] Q OUTPUTFILES S         
		 U _whitespace %(Ljava/io/Writer;Ljava/lang/String;)V W X
  Y _setCurrentLineNo (I)V [ \
  ] 	ISALLOWED _ _get &(Ljava/lang/String;)Ljava/lang/Object; a b
  c 	isAllowed e java/lang/Object g _autoscalarize 1(Lcoldfusion/runtime/Variable;)Ljava/lang/Object; i j
  k pdf m 
_invokeUDF f(Ljava/lang/Object;Ljava/lang/String;Lcoldfusion/runtime/CFPage;[Ljava/lang/Object;)Ljava/lang/Object; o p
  q ISALLOWEDIP s isAllowedIP u INPUTFILESSTRUCT w 	StructNew !()Lcoldfusion/util/FastHashtable; y z coldfusion/runtime/CFPage |
 } { _set '(Ljava/lang/String;Ljava/lang/Object;)V  �
  � OUTPUTFILESSTRUCT � 
		 �   � set (Ljava/lang/Object;)V � � coldfusion/runtime/Variable �
 � � 

         � _List $(Ljava/lang/Object;)Ljava/util/List; � � coldfusion/runtime/Cast �
 � � java/util/List � size ()I � � � � bindPageVariable P(Ljava/lang/String;Lcoldfusion/runtime/LocalScope;)Lcoldfusion/runtime/Variable; � �
  � get (I)Ljava/lang/Object; � � � � 
            � java/lang/String � READFILEFROMURL � readFileFromURL � _resolveAndAutoscalarize D(Lcoldfusion/runtime/Variable;[Ljava/lang/String;)Ljava/lang/Object; � �
  � _structSetAt E(Lcoldfusion/runtime/Variable;[Ljava/lang/Object;Ljava/lang/Object;)V � �
  � 
             � i b
  � _Map #(Ljava/lang/Object;)Ljava/util/Map; � �
 � � _String &(Ljava/lang/Object;)Ljava/lang/String; � �
 � � StructInsert 6(Ljava/util/Map;Ljava/lang/String;Ljava/lang/Object;)Z � �
 } � GETTEMPFILEPATH � getTempFilePath � .pdf �         
         � ___IMPLICITARRYSTRUCTVAR0 � ACTION � 
processddx � DDXFILE � NAME � result � a j
  � 	
         � 		
	 � #class$coldfusion$tagext$lang$PDFTag Ljava/lang/Class; coldfusion.tagext.lang.PDFTag � forName %(Ljava/lang/String;)Ljava/lang/Class; � � java/lang/Class �
 � � � �	  � _initTag P(Ljava/lang/Class;ILjavax/servlet/jsp/tagext/Tag;)Ljavax/servlet/jsp/tagext/Tag; � �
  � coldfusion/tagext/lang/PDFTag � attributecollection � _setArguments ((Ljava/lang/String;Ljava/lang/Object;Z)V � � coldfusion/tagext/GenericTag �
 � � 	hasEndTag (Z)V � �
 � � _emptyTcfTag !(Ljavax/servlet/jsp/tagext/Tag;)Z � �
  � 
	 
     	 RESULT _validatingMap �
  java/util/Map
 entrySet ()Ljava/util/Set; java/util/Set iterator ()Ljava/util/Iterator; java/util/Iterator next ()Ljava/lang/Object; class$java$util$Map$Entry java.util.Map$Entry �	  _cast 7(Ljava/lang/Object;Ljava/lang/Class;)Ljava/lang/Object;!"
 �# java/util/Map$Entry% getKey'&( key* SetVariable 8(Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/Object;,-
 }. 
StructFind 5(Ljava/util/Map;Ljava/lang/String;)Ljava/lang/Object;01
 }2 
successful4 _compare '(Ljava/lang/Object;Ljava/lang/String;)D67
 8 
            	: 
GETHTTPURL< 
getHttpUrl> 
             @ 
             	B CFLOOPD checkRequestTimeoutF 
 G hasNext ()ZIJK          
		M CONVERTSTRUCTTOMAPO convertStructToMapQ 			
	S 
processDDXU metaData Ljava/lang/Object;WX	 Y &coldfusion/runtime/AttributeCollection[ name] access_ remotea 
returntypec 
Parameterse TYPEg serviceusernamei ([Ljava/lang/Object;)V k
\l servicepasswordn 	ddxStringp 
inputfilesr outputfilest getReturnType ()Ljava/lang/String; this %Lcfpdf2ecfc2131260858$funcPROCESSDDX; LocalVariableTable Code getName runFunction �(Lcoldfusion/runtime/LocalScope;Ljava/lang/Object;Lcoldfusion/runtime/CFPage;Lcoldfusion/runtime/ArgumentCollection;)Ljava/lang/Object; __localScope Lcoldfusion/runtime/LocalScope; instance 
parentPage Lcoldfusion/runtime/CFPage; __arguments 'Lcoldfusion/runtime/ArgumentCollection; out Ljavax/servlet/jsp/JspWriter; value Lcoldfusion/runtime/Variable; t20 Ljava/util/List; t21 I t22 t23 t24 t25 t26 t27 t28 t29 pdf9 Lcoldfusion/tagext/lang/PDFTag; t32 Ljava/util/Iterator; LineNumberTable <clinit> 	getAccess getParamList ()[Ljava/lang/String; getMetadata 1       � �    �   WX    vw {   !     R�   z       xy   |w {   "     V�   z       xy   }~ {  �  !  Q-� +� � :+� !,� :	+#� &:
+(� &:+*� &:+,� &:+.� &:-� 2� 8:-� <:*>@� F� J:*L@� F� J:*N@� F� J:*PR� F� J:*TR� F� J:-V� Z-j� ^-`� df-� hY-� lSY-� lSYnS� rW-k� ^-t� dv-� hY-� lSYnS� rW-x-l� ^� ~� �-�-m� ^� ~� �-�� Z
�� �-�� Z-� l� �:66� � 6-#+� �:� �� � :� �� �-�� Z-
� �Y,S-q� ^-�� d�-� hY-
� �Y,S� �S� r� �-�� Z-r� ^--x� �� �-
� �Y.S� �� �-
� �Y,S� �� �W-�� Z`6��W-�� Z-� l� �:66� � 6-#+� �:� �� � :� �� |-�� Z-
� �Y,S-u� ^-ƶ d�-� hY�S� r� �-�� Z-v� ^--�� �� �-
� �Y.S� �� �-
� �Y,S� �� �W-�� Z`6��d-̶ Z+ζ &:� ~� �-� �Y�SҶ �-� �Y�S-� l� �-� �YPS-x� �� �-� �YTS-�� �� �-� �Y�Sض �-� ڶ �-ܶ Z-{� ^� ~� �-޶ Z-� �� �� �:-|� ^�-� l� �� �� � �-� Z�� �-� Z-� ��	� � : �0 � � �$�&�) :-+�/W-�� Z-� ^--� �� �-� l� ��3� �-�� Z-� l5�9�� o-;� Z-�� ^--� l� �-� l� �-�� ^-=� d?-� hY-�� ^--�� �� �-� l� ��3S� r� �W-A� Z� P-C� Z-�� ^--� l� �-� l� �-�� ^--� �� �-� l� ��3� �W-�� Z-� ZE�H �L ���-N� Z-�� ^-P� dR-� hY-� lS� r�-T� Z�   z  L !  Qxy    Q�   Q�X   Q��   Q��   Q��   Q�X   Q 9 :   Q �   Q � 	  Q "� 
  Q '�   Q )�   Q +�   Q -�   Q =�   Q K�   Q M�   Q O�   Q S�   Q��   Q��   Q��   Q��   Q��   Q��   Q��   Q��   Q��   Q��   Q ��   Q��   Q��  �  6 � c �j �j �j �j �j �j �k �k �k �k �klllmmm �i,o.o.o,o;p;p�q�q�q�q�q�q�r�r�r�r�r�r�r�r�r
p;pttnu}ununu[u[u�v�v�v�v�v�v�v�v�v�tt�y�y�y�y�yyyy$y$y$y9y9y9yNyNy�ySy�xf{o{o{f{�|�|}|�}�}�}�}�~�~�~  7�=�Y�Y�b�b�r�����������r�r�X�X�X�����������������������������7�~�~*�;�*�*�*� �  {  %    � � �� � �\Y� hY^SYVSY`SYbSYdSYRSYfSY� hY�\Y� hYhSY@SY�SYjS�mSY�\Y� hYhSY@SY�SYoS�mSY�\Y� hYhSY@SY�SYqS�mSY�\Y� hYhSYRSY�SYsS�mSY�\Y� hYhSYRSY�SYuS�mSS�m�Z�   z      xy   � � {         �   z       xy   �� {   <     � �Y>SYLSYNSYPSYTS�   z       xy   � {   "     �Z�   z       xy      {   #     *� 
�   z       xy        