

``mx.symbol.rcbrt``
======================================

Description
----------------------

Returns element-wise inverse cube-root value of the input.

.. math::

   rcbrt(x) = 1/\sqrt[3]{x}


**Example**::

	 
	 rcbrt([1,8,-125]) = [1.0, 0.5, -0.2]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.rcbrt(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_pow.cc#L269

