.. raw:: html



``mx.symbol.shape_array``
==================================================

Description
----------------------

Returns a 1D int64 array containing the shape of data.

**Example**::
	 
	 shape_array([[1,2,3,4], [5,6,7,8]]) = [2,4]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.shape_array(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input Array.                                               |
+----------------------------------------+------------------------------------------------------------+
| ``lhs.begin``                          | int or None, optional, default='None'.                     |
|                                        |                                                            |
|                                        | Defaults to 0. The beginning index along which the lhs     |
|                                        | dimensions are to be reshaped. Supports negative           |
|                                        | indices.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``lhs.end``                            | int or None, optional, default='None'.                     |
|                                        |                                                            |
|                                        | Defaults to None. The ending index along which the lhs     |
|                                        | dimensions are to be used for reshaping. Supports negative |
|                                        | indices.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``rhs.begin``                          | int or None, optional, default='None'.                     |
|                                        |                                                            |
|                                        | Defaults to 0. The beginning index along which the rhs     |
|                                        | dimensions are to be used for reshaping. Supports negative |
|                                        | indices.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``rhs.end``                            | int or None, optional, default='None'.                     |
|                                        |                                                            |
|                                        | Defaults to None. The ending index along which the rhs     |
|                                        | dimensions are to be used for reshaping. Supports negative |
|                                        | indices.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/master/src/operator/tensor/elemwise_unary_op_basic.cc#L505


.. disqus::
   :disqus_identifier: mx.symbol.shape_array
