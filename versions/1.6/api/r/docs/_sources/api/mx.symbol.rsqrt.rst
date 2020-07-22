

``mx.symbol.rsqrt``
======================================

Description
----------------------

Returns element-wise inverse square-root value of the input.

.. math::

   rsqrt(x) = 1/\sqrt{x}


**Example**::

	 
	 rsqrt([4,9,16]) = [0.5, 0.33333334, 0.25]
	 
	 The storage type of ``rsqrt`` output is always dense
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.rsqrt(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_pow.cc#L193

