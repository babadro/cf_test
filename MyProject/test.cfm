<cfoutput>#Abs(-3)#</cfoutput>
<cfquery name = "movies" datasource = "ows">
SELECT MovieTitle
FROM Films
ORDER BY MovieTitle
</cfquery>
<cfoutput query = "movies">
#MovieTitle#<br>
</cfoutput>