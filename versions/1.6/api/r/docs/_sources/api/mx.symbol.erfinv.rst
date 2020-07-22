

``mx.symbol.erfinv``
========================================

Description
----------------------

Returns element-wise inverse gauss error function of the input.


**Example**::

	 
	 erfinv([0, 0.5., -1.]) = [0., 0.4769, -inf]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.erfinv(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L907

