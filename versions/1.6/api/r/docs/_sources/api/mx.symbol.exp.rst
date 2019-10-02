

``mx.symbol.exp``
==================================

Description
----------------------

Returns element-wise exponential value of the input.

.. math::

   exp(x) = e^x \approx 2.718^x


**Example**::

	 
	 exp([0, 1, 2]) = [1., 2.71828175, 7.38905621]
	 
	 The storage type of ``exp`` output is always dense
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.exp(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_logexp.cc#L63

