TypesScript provides three access modifiers to class properties and methods those
Access Modifiers are : Public, Private and Protected. 
The Public modifier allows access from any location. 
The Private modifier allows acces within the same classs. 
The Protected modifier allowes access within the same class and subclasses. 



The public modifier allows class properties and methods to be accessible from all locations, which means 
if you don’t specify any access modifier for properties and methods, they will take the public modifier by default.
The private modifier limits the visibility to the same-class only. 
When you add the private modifier to a property or method, you can access that property or method within the same class.
Any attempt to access private properties or methods outside the class will result in an error at compile time.
The protected modifier allows properties and methods of a class to be accessible within same class and within subclasses.
When a class (child class) inherits from another class (parent class), it is a subclass of the parent class.
The TypeScript compiler will issue an error if you attempt to access the protected properties or methods from anywhere else.
To add the protected modifier to a property or a method, you use the protected keyword. 

Essentially, they are meant to allow a class to restrict access to members (fields or functions). The idea is that the less one type is allowed to access in another type, the less dependency can be created. This allows the accessed object to be changed more easily without affecting objects that refer to it.
