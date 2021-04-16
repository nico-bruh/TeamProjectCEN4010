/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bookstore;
import java.sql.*;
import javax.swing.JOptionPane;
/**
 *
 * @author joselo09111
 */
@JavaScript("./WishList.js")
public class booksA extends Div
{
  /**
   * CREATE TABLE book (
   *   id char(13) NOT NULL,
   *   title varchar(150) NOT NULL,
   *   author varchar(100) NOT NULL,
   *   price decimal(10,2) NOT NULL,
   *   genre enum('education','scifi','history','children','thriller') NOT NULL,
   *   releasedate date NOT NULL,
   *   publishinginfo varchar(100) NOT NULL,
   *   description mediumtext,
   *   PRIMARY KEY (id),
   *   UNIQUE KEY title_UNIQUE (title)
   * ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
   */
  //HTML->JAVASCRIPT->JAVA->SQL
  @ClientCallable
  @Route
  public static String getData()
  {
    JOptionPane.showMessageDialog(null, "The backend is running!");
    String res = "";
    try
    {
      Class.forName("com.mysql.cj.jdbc.Driver");
      Connection con=DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/WebsiteProj","root","la041013");
//here sonoo is database name, root is username and password
      Statement stmt=con.createStatement();
      ResultSet rs=stmt.executeQuery("select * from book");
      String aData = "";
      while(rs.next())
      {
        //System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3));
        for (int i = 0; i < 10; i++)
        {
          aData += rs.getInt(i) + "\n";
        }
      }
      con.close();
      //getElement().executeJs("greet($0,$1)", "client", getElement());
      getElement().executeJs("receiveDatabase($0)", aData);
      getElement().executeJs("updateSession($0)", aData);
    }catch(Exception e)
    {
      System.out.println(e);
    }
    return res
  }
  public static void updateData(String input)
  {
    try
    {
      Class.forName("com.mysql.cj.jdbc.Driver");
      Connection con=DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/WebsiteProj","root","la041013");
//here sonoo is database name, root is username and password
      Statement stmt=con.createStatement();
      ResultSet rs=stmt.executeQuery("select * from book");
      String aData = "";
      while(rs.next())
      {
        //System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3));
        for (int i = 0; i < 10; i++) {
          aData += rs.getInt(i) + "\n";
        }
      }
      con.close();
      //getElement().executeJs("greet($0,$1)", "client", getElement());
      getElement().executeJs("loadFromDatabase($0)", aData);
    }catch(Exception e)
    {
      System.out.println(e);
    }
  }
}
