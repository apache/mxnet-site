

``mx.symbol.size_array``
================================================

Description
----------------------

Returns a 1D int64 array containing the size of data.


**Example**::

	 
	 size_array([[1,2,3,4], [5,6,7,8]]) = [8]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.size_array(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input Array.                                               |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L625

