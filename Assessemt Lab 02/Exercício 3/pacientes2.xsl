<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <table>
                    <thead>
                        <tr>
                            <td>Indentificação</td>
                            <td>Sexo</td>
                            <td>Nome</td>
                            <td>Ano de Nascimento</td>
                            <td>BI</td>
                            <td>Contribuiente</td>
                            <td>Seguro de Saude</td>
                            <td>Médico</td>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="hostipal/paciente">
                            <tr>
                                <xsl:if test="Ano &gt; 2004">
                                    <td>
                                        <xsl:value-of select="Indentificacao" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="Sexo" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="Nome" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="Ano" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="BI" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="Contribuinte" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="Seguro" />
                                    </td>
                                    <xsl:if test="Sexo=F">
                                        <td>
                                            Dr. Jorge Costa
                                        </td>
                                    </xsl:if>
                                </xsl:if>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>