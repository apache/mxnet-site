

``mx.symbol.cosh``
====================================

Description
----------------------

Returns the hyperbolic cosine  of the input array, computed element-wise.

.. math::

   cosh(x) = 0.5\times(exp(x) + exp(-x))

The storage type of ``cosh`` output is always dense




Usage
----------

.. code:: r

	mx.symbol.cosh(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L351

