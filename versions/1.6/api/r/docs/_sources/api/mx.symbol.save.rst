

``mx.symbol.save``
====================================

Description
----------------------

Save an mx.symbol object

**Example**::

	 data = mx.symbol.Variable('data')
	 mx.symbol.save(data, 'temp.symbol')
	 data2 = mx.symbol.load('temp.symbol')
	 
Usage
----------

.. code:: r

	mx.symbol.save(symbol, filename)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``symbol``                             | the ``mx.symbol`` object                                   |
+----------------------------------------+------------------------------------------------------------+
| ``filename``                           | the filename (including the path)                          |
+----------------------------------------+------------------------------------------------------------+



