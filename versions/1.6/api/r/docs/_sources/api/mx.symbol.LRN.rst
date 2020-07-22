

``mx.symbol.LRN``
==================================

Description
----------------------

Applies local response normalization to the input.

The local response normalization layer performs "lateral inhibition" by normalizing
over local input regions.

If :math:`a_{x,y}^{i}` is the activity of a neuron computed by applying kernel :math:`i` at position
:math:`(x, y)` and then applying the ReLU nonlinearity, the response-normalized
activity :math:`b_{x,y}^{i}` is given by the expression:

.. math::

   b_{x,y}^{i} = \frac{a_{x,y}^{i}}{\Bigg({k + \frac{\alpha}{n} \sum_{j=max(0, i-\frac{n}{2})}^{min(N-1, i+\frac{n}{2})} (a_{x,y}^{j})^{2}}\Bigg)^{\beta}}

where the sum runs over :math:`n` "adjacent" kernel maps at the same spatial position, and :math:`N` is the total
number of kernels in the layer.




Usage
----------

.. code:: r

	mx.symbol.LRN(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data to LRN                                          |
+----------------------------------------+------------------------------------------------------------+
| ``alpha``                              | float, optional, default=9.99999975e-05.                   |
|                                        |                                                            |
|                                        | The variance scaling parameter :math:`\alpha` in the LRN   |
|                                        | expression.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``beta``                               | float, optional, default=0.75.                             |
|                                        |                                                            |
|                                        | The power parameter :math:`\beta` in the LRN expression.   |
+----------------------------------------+------------------------------------------------------------+
| ``knorm``                              | float, optional, default=2.                                |
|                                        |                                                            |
|                                        | The parameter :math:`k` in the LRN expression.             |
+----------------------------------------+------------------------------------------------------------+
| ``nsize``                              | int (non-negative), required.                              |
|                                        |                                                            |
|                                        | normalization window width in elements.                    |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/nn/lrn.cc#L164

