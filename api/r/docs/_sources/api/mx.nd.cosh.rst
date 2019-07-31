.. raw:: html



``mx.nd.cosh``
============================

Description
----------------------

Returns the hyperbolic cosine  of the input array, computed element-wise.

.. math::

   cosh(x) = 0.5\times(exp(x) + exp(-x))

The storage type of ``cosh`` output is always dense





Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/master/src/operator/tensor/elemwise_unary_op_trig.cc#L216


.. disqus::
   :disqus_identifier: mx.nd.cosh
